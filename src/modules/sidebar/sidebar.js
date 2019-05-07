import "./sidebar.css";
import "../list/list.js";
import {addListItem} from "../list/list";

const buttonPluse = document.getElementById('button_plus');

if ('content' in document.createElement('template') === false) {
    throw new Error(text);
} else buttonPluse.addEventListener('click', addListItem);