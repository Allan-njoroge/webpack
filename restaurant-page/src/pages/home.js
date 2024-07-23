import { createElementWithClass, appendChildren } from "../utils/utils";
import "../css/home.css"

const homePage = () => {
    const content = document.querySelector("#content");
    content.innerHTML = ""

    const homeDiv = createElementWithClass("div", "home-div");

    const restaurantName = createElementWithClass("h4", "restaurant-name");
    restaurantName.textContent = "Resto's Restaurant"

    const homeMainHeading = createElementWithClass("h1", "home-main-heading");
    homeMainHeading.textContent = "Taste Flavours From Around the World"

    const homeHeadingDesc = createElementWithClass("p", "home-heading-desc");
    homeHeadingDesc.textContent = "Where cullinary excellence meets a symphony of flavours, creating a harmonious dining experience for every plate."

    const buttonContainer = createElementWithClass("div", "home-btn-container")
    const discoverMenu = createElementWithClass("button", "discover-menu", "pry-btn")
    discoverMenu.textContent = "Menu"
    const makeReservation = createElementWithClass("button", "make-reservation", "sec-btn")
    makeReservation.textContent = "Reserve"

    appendChildren(buttonContainer, [discoverMenu, makeReservation])
    appendChildren(homeDiv, [restaurantName, homeMainHeading, homeHeadingDesc, buttonContainer])
    content.appendChild(homeDiv)
}

export default homePage;