
import './list.css';

const listItem = document.getElementById('templ');
const listItemTitle = listItem.content.querySelector('.list-item__title');
const listItemText = listItem.content.querySelector('.list-item__text');
const list = document.querySelector('.list');
const listItemMarkText = document.getElementById('text-input');
let curId = 0;
let flag =true;
let notes = [];
const curItem = {
	title: null,
	subtitle: null,
	text: null
};


function setCurData () {
    if (flag) {
        curItem.title = listItemMarkText.value;
        if (listItemMarkText.value.slice(-1) === '\n' || listItemMarkText.value.length < 40) flag = false;
    }
    if (!flag) {
        if (listItemMarkText.value.length < 80) return;
        curItem.subtitle = listItemMarkText.value.slice(listItemMarkText.value.search('\n'));
    }
}

function getCurItem() {
    listItemMarkText.addEventListener('input', setCurData);
    listItemMarkText.removeEventListener('input', setCurData);
}



// listItemMarkText.addEventListener('input', function () {
// 	if (flag) {
// 		if (!isOverflowed(allListItemTitle[id])) allListItemTitle[id].innerHTML = listItemMarkText.value;
// 		if (listItemMarkText.value.slice(-1) === '\n') flag = false;
//     } if (!flag) {
//         if (!isOverflowed(allListItemText[id])) allListItemText[id].innerHTML = listItemMarkText.value.slice(listItemMarkText.value.search('\n'));
// 	}
// });

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