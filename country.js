const select = document.querySelector(".js-country");

const COUNTRY_KEY = "country";

function saveToLocal() {
  localStorage.setItem(COUNTRY_KEY, select.value);
}


function init() {
  if (!localStorage.getItem(select.value)) {
    saveToLocal();
  }
}

window.onload = function () {
  let savedcountry = window.localStorage.getItem("country");
  select.value = savedcountry;
};
