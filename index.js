// index.js
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".value-item");

  // Animación simple al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
});
