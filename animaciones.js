document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll(".seccion");
  const imagenes = document.querySelectorAll(".galeria img, .proyecto img");

  const options = { threshold: 0.2 };

  const observerSecciones = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  const observerImagenes = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  secciones.forEach(sec => observerSecciones.observe(sec));
  imagenes.forEach(img => observerImagenes.observe(img));
});
