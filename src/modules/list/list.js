
import './list.css';

const listItem = document.getElementById('templ');
const listItemTitle = listItem.content.querySelector('.list-item__title');
const listItemText = listItem.content.querySelector('.list-item__text');
const list = document.querySelector('.list');
const listItemMarkText = document.getElementById('text-input');
let id = 0;
const notes = {};

listItemTitle.innerHTML = 'Новая Заметка';
listItemText.innerHTML = '';
let cloneItem = document.importNode(listItem.content, true);
list.appendChild(cloneItem);

let flag = true;
let allListItemTitle = document.querySelectorAll('.list-item__title');
let allListItemText = document.querySelectorAll('.list-item__text');
listItemMarkText.addEventListener('input', function (flag) {
	if (flag) {
		if (!isOverflowed(allListItemTitle[id])) allListItemTitle[id].innerHTML = listItemMarkText.value;
		if (listItemMarkText.value.slice(-1) === '\n') flag = false;
    } if (!flag) {
        if (!isOverflowed(allListItemText[id])) allListItemText[id].innerHTML = listItemMarkText.value.slice(-1);
	}
});

function isOverflowed(el) {
    return el.scrollWidth > el.offsetWidth ||
        el.scrollHeight > el.offsetHeight;
}

export function addListItem() {
	const itemData = listItemMarkText.value.split('\n');
	listItemTitle.innerHTML = itemData[0] || 'Новая Заметка';
	listItemText.innerHTML = itemData[1] || '';
	cloneItem = document.importNode(listItem.content, true);
	list.appendChild(cloneItem);
	listItemMarkText.value = '';
	flag = true;
	list.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className === 'list-item__close') target.parentNode.remove();
	});
}