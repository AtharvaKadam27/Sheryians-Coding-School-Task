let color = document.querySelector(".color");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  color.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
});
