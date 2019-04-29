import "./sidebar.css";
import "../list/list";

document.getElementById('button_plus').addEventListener('click', function () {
    putHeadAndText(getInnerText());
    putMark();
});