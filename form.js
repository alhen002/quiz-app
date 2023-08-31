const form = document.querySelector("[data-js='form']");
const cardWrapper = document.querySelector("[data-js='card-wrapper']");

const formDivs = document.querySelectorAll("[data-js='form-div']");

formDivs.forEach((div) => {
  const textarea = div.querySelector("[data-js='textarea']");
  const span = div.querySelector("[data-js='remaining']");
  textarea.addEventListener("input", () => {
    const remaining = 150 - textarea.value.length;
    span.textContent = remaining;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const dataObj = Object.fromEntries(data);

  const card = document.createElement("article");
  card.classList.add("card");
  card.setAttribute("data-js", "article");

  const title = document.createElement("h3");
  title.classList.add("card__title");
  title.textContent = dataObj.question;
  card.appendChild(title);

  const titleSpan = document.createElement("span");
  titleSpan.classList.add("card__number");
  title.appendChild(titleSpan);

  const icon = document.createElement("img");
  icon.classList.add("card__icon");
  icon.setAttribute("src", "assets/img/bookmark-regular.svg");
  card.appendChild(icon);

  icon.addEventListener("click", () => {
    icon.attributes.src.nodeValue.includes("solid")
      ? icon.setAttribute("src", "./assets/img/bookmark-regular.svg")
      : icon.setAttribute("src", "./assets/img/bookmark-solid.svg");
  });

  const button = document.createElement("button");
  button.classList.add("card__button");
  button.textContent = "Show Answer";
  card.appendChild(button);

  button.addEventListener("click", () => {
    card.querySelector(":scope p").classList.toggle("hidden");
  });
  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.classList.add("hidden");
  answer.textContent = dataObj.answer;
  card.appendChild(answer);

  const taglist = document.createElement("ul");
  taglist.classList.add("card__taglist");
  card.appendChild(taglist);

  const taglistItem = document.createElement("li");
  taglistItem.classList.add("card__taglist__item");
  taglistItem.textContent = dataObj.tag;
  taglist.appendChild(taglistItem);

  cardWrapper.appendChild(card);
  e.target.reset();
  e.target.elements.question.focus();
});
