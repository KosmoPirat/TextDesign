import "./text.css"

import {markdown} from 'markdown';

function Editor(input, preview) {
    this.update = function () {
        preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
}
let $ = function (id) { return document.getElementById(id); };
new Editor($("text-input"), $("preview"));