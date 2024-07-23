import "./style.css";
import homePage from './pages/home'

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homePage()

homeBtn.addEventListener("click", () => {
    alert(`Home button clicked`);
    homePage()
})

menuBtn.addEventListener("click", () => {
    alert(`Menu button clicked`);
})

contactBtn.addEventListener("click", () => {
    alert(`Contact button clicked`);
})