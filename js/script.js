document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => el.style.opacity = 1, 400);
  });
});
