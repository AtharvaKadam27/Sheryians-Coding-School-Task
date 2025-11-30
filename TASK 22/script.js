let p = document.querySelector("p");
let text = p.innerText;
let characters = "ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iterations = 0.25;
function randomText() {
  let str = text
    .split("")
    .map((ch, index) => {
      if (index < iterations) {
        return ch;
      }
      return characters.split("")[Math.floor(Math.random() * 52)];
    })
    .join("");
  p.innerText = str;
  iterations += 0.35;
  console.log(iterations);
}

setInterval(randomText, 50);
