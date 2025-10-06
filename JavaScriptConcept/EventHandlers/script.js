// Click Event
const button = document.getElementById("myBtn");
button.addEventListener("click", () => {
    alert("Button Clicked!");
});

// Mouse Hover Event
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", () => {
    hoverDiv.style.backgroundColor = "orange";
    hoverDiv.textContent = "Mouse Over!";
});

hoverDiv.addEventListener("mouseout", () => {
    hoverDiv.style.backgroundColor = "lightgreen";
    hoverDiv.textContent = "Hover Over Me";
});

// Double Click Event
hoverDiv.addEventListener("dblclick", () => {
    alert("Div Double Clicked!");
});