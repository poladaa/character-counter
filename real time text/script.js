"use strict";
const textArea = document.getElementById("text");
const counter = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");

textArea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  counter.textContent = textArea.value.length;
  remaining.textContent =
    textArea.getAttribute("maxLength") - counter.textContent;
}
