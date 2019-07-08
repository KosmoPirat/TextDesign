import './list.css';

import { updateTextArea } from '../text/text';

const list = document.querySelector('.list');
const listItem = document.getElementById('templ');
let lastId = 0;
let currentId = 0;
const notes = {};
export const defaultTitle = 'Новая заметка';


export const addListItem = () => {
	const cloneItem = document.importNode(listItem.content, true);
	list.appendChild(cloneItem);

	const newItem = list.lastElementChild;
	newItem.id = currentId = lastId;
	lastId++;

	updateCurrentItem(defaultTitle);
	updateTextArea('');

	newItem.addEventListener('click', (event) => {
		let target = event.target;
		
		if (target.className === 'list-item__close') {
			target.parentNode.remove();
		} else {
			currentId = target.id || target.parentElement.id;
			updateTextArea(notes[currentId].text);
		}
	});
};

export const updateCurrentItem = (text) => {
	const currentItem = document.getElementById(String(currentId));

	notes[currentId] = { text }; // Это эквивалентно записи notes[currentId] = { text: text }

	// Дописать: класть правильные части строки в заголовок и подзаголовок

	const title = currentItem.firstElementChild;
	const subtitle = currentItem.lastElementChild;
	let notesText = notes[currentId].text.split('\n');
	let [titleText, subtitleText] = notesText;
	if (notesText.length < currentItem.childElementCount) {
		if (subtitleText === undefined) { subtitleText = ''; }
		if (title.scrollWidth === title.offsetWidth) {
			title.innerHTML = titleText;
		}
		if (subtitle.scrollWidth === subtitle.offsetWidth) {
			subtitle.innerHTML = subtitleText;
		}
	}
};