document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden-info");

  hiddenElements.forEach(el => {
    el.addEventListener("click", () => {
      const revealed = el.getAttribute("data-info");
      el.textContent = revealed;
      el.style.cursor = "default";
      el.style.color = "black";
      el.style.textDecoration = "none";
    });
  });
});
