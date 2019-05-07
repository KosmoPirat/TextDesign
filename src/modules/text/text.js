import "./text.css";
import "../list/list.js";
import {markdown} from 'markdown';

let input = document.getElementById("text-input");
let output = document.getElementById("preview");
input.addEventListener("input", function () {
    output.innerHTML = markdown.toHTML(input.value);
});



