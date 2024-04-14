from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
openai.api_key = "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"


# Route for rendering the chatbot page
@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")


# Route for handling user inputs and generating chatbot responses
@app.route("/chatbot/get_response", methods=["POST"])
def get_response():
    user_input = request.form["user_input"]

    # Call OpenAI's completion endpoint to get the chatbot response
    response = openai.Completion.create(
        engine="text-davinci-002", prompt=user_input, temperature=0.7, max_tokens=150
    )

    chatbot_response = response.choices[0].text.strip()

    # Return the chatbot response
    return jsonify({"response": chatbot_response})


# Sample initial profile data
profile_data = {
    "name": "John Doe",
    "email": "john@example.com",
    "university": "ABC University",
}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/profile", methods=["GET", "POST"])
def profile():
    if request.method == "POST":
        # Update profile data with form input
        profile_data["name"] = request.form["name"]
        profile_data["email"] = request.form["email"]
        profile_data["university"] = request.form["university"]
        return render_template("profile.html", profile=profile_data)
    else:
        return render_template("profile.html", profile=profile_data)


# Sample messages data
messages = [
    {
        "sender": "John Doe",
        "timestamp": "2 hours ago",
        "content": "Hello, how are you?",
    },
    {
        "sender": "Jane Smith",
        "timestamp": "1 hour ago",
        "content": "I'm doing well, thanks!",
    },
    # Add more messages here
]


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/messages")
def messages():
    return render_template("messages.html", messages=messages)


# Configure a secret key to use sessions
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

# Sample profile data
profile_data = {
    "name": "John Doe",
    "email": "john@example.com",
    "university": "ABC University",
}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/profile")
def profile():
    if "username" in session:
        return render_template("profile.html", profile=profile_data)
    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    # Clear the session
    session.pop("username", None)
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(debug=True)
