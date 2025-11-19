let body = document.querySelector("body");
let btn = document.querySelector("button");
let arr = [
  "Trust yourself",
  "Keep on truckin",
  "Life is either a daring adventure or nothing",
  "Character is power",
  "Stay hungry, stay foolish.",
  "Happiness depends upon ourselves",
  "Be fearless",
];

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");
  console.log(Math.floor(Math.random() * arr.length));

  h1.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  let x = Math.floor(Math.random() * 80);
  let y = Math.floor(Math.random() * 80);
  let rot = Math.floor(Math.random() * 360);
  let s = Math.random() * 3;
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = s;

  body.appendChild(h1);
});
