import "./text.css"

import {markdown} from 'markdown';

let input = document.getElementById("text-input");
let output = document.getElementById("preview");
input.addEventListener("input", function () {
    output.innerHTML = markdown.toHTML(input.value);
});



