import "./sidebar.css";
import "../list/list";
import {addListItem} from "../list/list";

const buttonPluse = document.getElementById('button_plus');
if ('content' in document.createElement('template')) {

    buttonPluse.onclick = addListItem;

} else console.log('Browser not supported tag "template"');