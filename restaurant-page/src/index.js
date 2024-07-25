import "./style.css";
import homePage from './pages/home'
import menuPage from './pages/menu'
import contactPage from './pages/contact'
import reservePage from './pages/reserve'

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
    menuPage()
})

resrverBtn.addEventListener("click", () => {
    alert(`Reserve button clicked`);
    reservePage()
})

contactBtn.addEventListener("click", () => {
    alert(`Contact button clicked`);
    contactPage()
})