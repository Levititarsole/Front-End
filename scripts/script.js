
const menuButton = document.querySelector("header > section:first-child button");
const nav = document.querySelector("header > nav");

menuButton.onclick = () => {
    nav.classList.toggle("toonNav");
};