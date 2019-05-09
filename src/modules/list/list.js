import './list.css';

import { updateTextArea } from '../text/text'

const list = document.querySelector('.list');
const listItem = document.getElementById('templ');

let lastId = 0;
let currentId = 0;
const notes = {};

export const defaultTitle = 'Новая заметка';

export function addListItem() {
	const cloneItem = document.importNode(listItem.content, true);
	list.appendChild(cloneItem);

	const newItem = list.lastElementChild;
	newItem.id = currentId = lastId;
	lastId++;

	updateCurrentItem(defaultTitle);
	updateTextArea('');

	newItem.addEventListener('click', function (event) {
		let target = event.target;
		
		if (target.className === 'list-item__close') {
			target.parentNode.remove();
		} else {
			currentId = target.id || target.parentElement.id;
			updateTextArea(notes[currentId].text);
		}
	});
}

export function updateCurrentItem(text) {
	const currentItem = document.getElementById(currentId);

	notes[currentId] = { text }; // Это эквивалентно записи notes[currentId] = { text: text }

	// Дописать: класть правильные части строки в заголовок и подзаголовок
	// ---
	const title = currentItem.firstElementChild;
	const subtitle = currentItem.lastElementChild;

	title.innerHTML = notes[currentId].text;
	// ---
}