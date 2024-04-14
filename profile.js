// Function to toggle between profile view and edit profile form
document.getElementById("edit-profile-btn").addEventListener("click", function () {
    document.getElementById("profile").style.display = "none";
    document.getElementById("edit-profile").style.display = "block";
});


// Function to handle form submission for editing profile
document.getElementById("edit-profile-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const university = document.getElementById("university").value;

    // Update profile information
    document.getElementById("profile-info").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>University:</strong> ${university}</p>
    `;

    // Display profile view and hide edit profile form
    document.getElementById("profile").style.display = "block";
    document.getElementById("edit-profile").style.display = "none";
});
