let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

let flag = true;

btn.addEventListener("click", () => {
  if (flag) {
    h3.innerHTML = "Friends";
    h3.style.color = "rgb(5, 196, 5)";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "crimson";
    flag = false;
  } else {
    h3.innerHTML = "Stranger";
    h3.style.color = "crimson";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "rgb(5, 196, 5)";
    flag = true;
  }
});
