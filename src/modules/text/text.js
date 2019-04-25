import "./text.css"

import {markdown} from 'markdown';

let input = document.getElementById("text-input");
let output = document.getElementById("preview");
input.addEventListener("input", function () {
    console.log(input.value + "\n");
    output.innerHTML = markdown.toHTML(input.value);
    console.log(markdown.toHTML(input.value));
});



