// Simple animation: fade in hero text
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.style.opacity = 0;
  setTimeout(() => {
    header.style.transition = "opacity 2s";
    header.style.opacity = 1;
  }, 500);
});

// Interactive button: alert when clicked
const ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("click", () => {
  alert("You’re about to reserve your seat at The Dough Date!");
});

// Form handling (if you add a newsletter form later)
const form = document.querySelector("#newsletterForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for joining our waitlist!");
  });
}
