console.log("xx1");
const quoteBody = document.getElementById("quote");
console.log("xx2");
const adviceNumber = document.getElementById("advice-number");
console.log("xx3");
const diceBtn = document.getElementById("dice-btn");
console.log("xx4");
const fetchAdvice = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  quoteBody.innerHTML = `"${data.slip.advice}"`;
  adviceNumber.innerHTML = `${data.slip.id}`;
};
diceBtn.addEventListener("click", fetchAdvice);
