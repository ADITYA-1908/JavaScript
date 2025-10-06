// ------------------------
// Selecting Elements
// ------------------------
const container = document.getElementById("container");
const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const inputField = document.getElementById("inputField");
const elementsContainer = document.getElementById("elementsContainer");
const myForm = document.getElementById("myForm");
const formInput = document.getElementById("formInput");

// ------------------------
// Event Listeners
// ------------------------

// Click event
clickBtn.addEventListener("click", () => {
    container.textContent = "Button Clicked!";
    container.style.color = "blue";
});

// Double Click event
dblClickBtn.addEventListener("dblclick", () => {
    container.textContent = "Button Double Clicked!";
    container.style.backgroundColor = "lightcoral";
});

// Hover event
container.addEventListener("mouseover", () => {
    container.classList.add("highlight");
});
container.addEventListener("mouseout", () => {
    container.classList.remove("highlight");
});

// Input event
inputField.addEventListener("input", (e) => {
    container.textContent = `You typed: ${e.target.value}`;
});

// Form submit event
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Form Submitted: ${formInput.value}`);
    formInput.value = "";
});

// ------------------------
// Creating & Removing Elements
// ------------------------
addBtn.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.textContent = `New Element ${elementsContainer.children.length + 1}`;
    newDiv.classList.add("element");
    elementsContainer.appendChild(newDiv);
});

removeBtn.addEventListener("click", () => {
    if (elementsContainer.lastChild) {
        elementsContainer.removeChild(elementsContainer.lastChild);
    }
});

// ------------------------
// DOM Traversal
// ------------------------
console.log("Parent of container:", container.parentElement);
console.log("Children of body:", document.body.children);

// ------------------------
// Changing Attributes
// ------------------------
container.setAttribute("data-custom", "123");
console.log("Custom attribute:", container.getAttribute("data-custom"));

// ------------------------
// Object Style Manipulation
// ------------------------
container.style.fontSize = "20px";
container.style.padding = "10px";
