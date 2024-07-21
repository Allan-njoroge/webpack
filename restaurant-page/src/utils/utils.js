// create element with classes
export const createElementWithClass = (tag, ...classes) => {
    const element = document.createElement(tag);

    classes.forEach(cls => element.classList.add(cls));
    return element;
}

// append children function
export const appendChildren = (parent, children) => {
    children.forEach(child => parent.appendChild(child))
}