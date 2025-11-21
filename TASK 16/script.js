let cur = document.querySelector("img");

document.body.addEventListener("mousemove", (e) => {
  cur.style.left = e.x + "px";
  cur.style.top = e.y + "px";
});
