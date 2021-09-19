const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".header__menu-btn-toggle");
const html = document.querySelector("html");

const handleHtmlOverflow = () => {
  if (menuButton.checked) {
    return (html.style.overflow = "hidden");
  }
  return (html.style.overflow = "auto");
}

const handleItemClick = (event) => {
  if (event.target.className === "nav__link link") {
    menuButton.checked = false;
    handleHtmlOverflow();
  }
};

nav.addEventListener("click", handleItemClick);
menuButton.addEventListener("change", handleHtmlOverflow);
