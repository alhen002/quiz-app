const allCards = document.querySelectorAll("article");

console.log(allCards);
allCards.forEach((article) => {
  article.querySelector(":scope button").addEventListener("click", () => {
    article.querySelector(":scope p").classList.toggle("hidden");
  });
});
