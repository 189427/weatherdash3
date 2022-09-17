var submitBTN = document.querySelector("#submit");
var apiKey = "877b4dcfd9c0317333112e17b9a7bc27";

submitBTN.addEventListener("submit", function () {
  event.preventDefault();
  let userInput = document.querySelector("#city").value;
  console.log(userInput);
  getCoord(userInput);
});
