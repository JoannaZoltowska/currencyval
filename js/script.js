console.log("Witajcie na zapleczu");

let eurElement = document.querySelector(".js-eur");
let converterElement = document.querySelector(".js-converter");
let formElement = document.querySelector(".js-form");
let convResultElement = document.querySelector(".js-convResult");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let converter = converterElement.value;
  let eur = eurElement.value;
  let convResult = converter * eur;
  convResultElement.innerText = convResult.toFixed(2);
});
