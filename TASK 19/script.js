let text = document.querySelectorAll(".text");

text.forEach((item, index) => {
  item.addEventListener("mouseenter", (e) => {
    item.childNodes[3].style.opacity = 1;
  });
  item.addEventListener("mouseleave", (e) => {
    item.childNodes[3].style.opacity = 0;
  });
  item.addEventListener("mousemove", (e) => {
    item.childNodes[3].style.left = e.x + "px";
  });
});
