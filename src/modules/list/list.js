
import "./list.css";

const listItem = document.getElementById('templ');
const listItemTitle = listItem.content.querySelector('.list-item__title');
const listItemText = listItem.content.querySelector('.list-item__text');
const list = document.querySelector('.list');

export function addListItem() {
    let listItemMarkText = document.getElementById('text-input');
    let itemData = listItemMarkText.value.split('\n');
    listItemTitle.innerHTML = itemData[0] || "Новая Заметка";
    listItemText.innerHTML = itemData[1] || "";
    let cloneItem = document.importNode(listItem.content, true);
    list.appendChild(cloneItem);
    list.onclick = function (event) {
             let target = event.target;
             if (target.className === 'list-item__close') target.parentNode.remove();
         };

}