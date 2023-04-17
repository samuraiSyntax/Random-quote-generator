// VARIABLES
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

quoteEl.innerText = "Quotes will be displayed here";

// FUCTIONS
const generateQuote = () => {
  fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((data) => {
      let quote = data[Math.floor(Math.random() * data.length)];

      quoteEl.innerText = quote.text;
      authorEl.innerText = `- ${quote.author}`;
    });
};

// EVENT LISTENERS
generateBtn.addEventListener("click", () => {
  generateQuote();
});
