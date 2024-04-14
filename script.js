// Sample data for demonstration
const posts = [
    { id: 1, user: "John Doe", content: "Just finished my project. Feeling accomplished! 🎉" },
    { id: 2, user: "Jane Smith", content: "Anyone up for a study session tomorrow?" },
    { id: 3, user: "Alice Johnson", content: "New to the platform. Excited to connect with fellow students!" }
];

// Function to display posts on the page
function displayPosts() {
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.user}</h3>
            <p>${post.content}</p>
        `;
        postContainer.appendChild(postElement);
    });
}

// Function to add a new post
function addPost(user, content) {
    const newPost = {
        id: posts.length + 1,
        user: user,
        content: content
    };
    posts.push(newPost);
    displayPosts();
}

// Event listener for posting
document.getElementById("post-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const content = document.getElementById("content").value;
    if (user && content) {
        addPost(user, content);
        document.getElementById("user").value = "";
        document.getElementById("content").value = "";
    } else {
        alert("Please enter both user and content.");
    }
});

// Initial display of posts
displayPosts();
