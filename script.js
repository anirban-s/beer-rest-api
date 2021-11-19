const body = document.body;
const quoteBox = document.getElementById("quote-box");
const text = document.getElementById("text");
const author = document.getElementById("author");
const tweetQuote = document.getElementById("tweet-quote");
const newQuote = document.getElementById("new-quote");

async function getQuote() {
  setColor();
  const apiUrl =
  "https://api.quotable.io/random";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    author.textContent = data.author;
    text.textContent = data.content;
  } catch (error) {
    console.log("Error: ", error);
  }
}

function tweet(e) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text.innerText} - ${author.innerText}`;
  //window.open(twitterUrl, "_top");
  tweetQuote.setAttribute("href", twitterUrl);
}

function setColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  body.setAttribute("style", `background-color : ${color};`);
  newQuote.setAttribute("style", `background-color : ${color};`);
  text.setAttribute("style", `color : ${color};`);
  author.setAttribute("style", `color : ${color};`);
  document.querySelector(".quote-text").setAttribute("style", `color : ${color};`);
  tweetQuote.setAttribute("style", `background-color : ${color};`);
}


newQuote.addEventListener("click", getQuote);
tweetQuote.addEventListener("click", tweet);

getQuote();
setColor();