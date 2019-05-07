import "./sidebar.css";
import "../list/list.js";
import {addListItem} from "../list/list";

const buttonPluse = document.getElementById('button_plus');

if ('content' in document.createElement('template') === false) {
    console.log('Browser not supported tag "template"');
} else buttonPluse.addEventListener('click', addListItem);