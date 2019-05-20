import './text.css';

import  { markdown } from 'markdown';
import { defaultTitle, updateCurrentItem } from '../list/list.js';

export const textInOut = document.querySelector('.text');
const input = document.getElementById('text-input');
const output = document.getElementById('preview');

input.addEventListener('input', function () {
	updateCurrentItem(input.value);
	updateTextArea(input.value);
});

export const updateTextArea = (text) => {
	const textToRender = (text === defaultTitle) ? '' : text;

	input.value = textToRender;
	output.innerHTML = markdown.toHTML(input.value);
};
