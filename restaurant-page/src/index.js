import "./style.css";
import homePage from './pages/home'
import menuPage from './pages/menu'

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");



homeBtn.addEventListener("click", () => {
    alert(`Home button clicked`);
    homePage()
})

menuBtn.addEventListener("click", () => {
    alert(`Menu button clicked`);
    menuPage()
})

contactBtn.addEventListener("click", () => {
    alert(`Contact button clicked`);
})