
const form = document.querySelector(".js-name"),
input = form.querySelector("input"),
greeting = document.querySelector("#js-name-appear");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function init() {
  // if user submit the form, initiate handleSubmit().
  form.addEventListener("submit", handleSubmit);

}


function handleSubmit(event){
  event.preventDefault();
  greeting.innerHTML = input.value;
  input.style = "display: none";
  console.log(event.target.childNodes);
}

init()