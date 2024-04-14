// Sample data for demonstration
const messages = [
    { sender: "John Doe", timestamp: "2 hours ago", content: "Hello, how are you?" },
    { sender: "Jane Smith", timestamp: "1 hour ago", content: "I'm doing well, thanks!" },
    // Add more messages here
];

// Function to display messages on the page
function displayMessages() {
    const messageList = document.getElementById("message-list");
    messageList.innerHTML = "";
    messages.forEach(message => {
        const messageElement = document.createElement("li");
        messageElement.innerHTML = `
            <div class="message">
                <div class="message-header">
                    <h3>${message.sender}</h3>
                    <span>${message.timestamp}</span>
                </div>
                <p>${message.content}</p>
            </div>
        `;
        messageList.appendChild(messageElement);
    });
}

// Initial display of messages
displayMessages();
