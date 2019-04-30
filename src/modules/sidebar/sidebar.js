import "./sidebar.css";
import "../list/list";
import {initListItem} from "../list/list";

document.getElementById('button_plus').addEventListener('click', function () {
    if ('content' in document.createElement('template')) {

        initListItem();

    } else {
        console.log('Browser not supported tag "template"');
    }
});