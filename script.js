// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Set Theme on Load
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// Dynamic Project Loading
const projectList = document.getElementById("project-list");
fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
    .then(response => response.json())
    .then(data => {
        projectList.innerHTML = "";
        data.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";
            projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.body}</p>`;
            projectList.appendChild(projectCard);
        });
    });

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});
