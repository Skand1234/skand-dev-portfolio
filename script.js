// Dark Mode Toggle

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
body.classList.add("dark-mode");
themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
body.classList.toggle("dark-mode");

const theme = body.classList.contains("dark-mode")
    ? "dark"
    : "light";

localStorage.setItem("theme", theme);

themeToggle.textContent =
    theme === "dark" ? "☀️" : "🌙";

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const mailtoLink =
    `mailto:skandmaurya84@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

window.location.href = mailtoLink;

contactForm.reset();

alert("Opening your email client...");

});

// Smooth Scroll

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(event) {

    event.preventDefault();

    const target =
        document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }

});

});

// Scroll Animation

const observerOptions = {
threshold: 0.1,
rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0)";

        }

    });

},
observerOptions

);

document.querySelectorAll("section").forEach(section => {
section.style.opacity = "0";
section.style.transform = "translateY(20px)";
section.style.transition = "all 0.6s ease";

observer.observe(section);

});
