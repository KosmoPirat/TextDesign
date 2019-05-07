
import "./list.css";

const listItem = document.getElementById('templ');
const listItemTitle = listItem.content.querySelector('.list-item__title');
const listItemText = listItem.content.querySelector('.list-item__text');
const list = document.querySelector('.list');
const listItemMarkText = document.getElementById('text-input');

export function addListItem() {
    const itemData = listItemMarkText.value.split('\n');
    listItemTitle.innerHTML = itemData[0] || "Новая Заметка";
    listItemText.innerHTML = itemData[1] || "";
    const cloneItem = document.importNode(listItem.content, true);
    list.appendChild(cloneItem);
    list.addEventListener('click', function (event) {
        let target = event.target;
        if (target.className === 'list-item__close') target.parentNode.remove();
    });
}