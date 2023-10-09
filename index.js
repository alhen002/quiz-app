const allCards = document.querySelectorAll("[data-js='article']");

const bookmarks = document.querySelectorAll(".card__icon");

// create a function that will toggle the bookmark icon and apply it to all icons
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.attributes.src.nodeValue.includes("solid")
      ? bookmark.setAttribute("src", "./assets/img/bookmark-regular.svg")
      : bookmark.setAttribute("src", "./assets/img/bookmark-solid.svg");
  });
});

// create a function that will toggle the hidden class on the paragraph and apply it to all paragraphs
allCards.forEach((article) => {
  article.querySelector(":scope button").addEventListener("click", () => {
    article.querySelector(":scope p").classList.toggle("hidden");
  });
});
