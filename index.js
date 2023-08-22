const allCards = document.querySelectorAll("article");


allCards.forEach((article) => {
  article.querySelector(":scope button").addEventListener("click", () => {
    article.querySelector(":scope p").classList.toggle("hidden");
  });
});
