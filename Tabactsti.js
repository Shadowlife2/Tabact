window.addEventListener("scroll", () => {
  let header = document.querySelector(".cabeza-neflix");
  header.classList.toggle("sticky", window.scrollY > 0);
});

  