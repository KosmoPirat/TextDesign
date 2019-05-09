import './sidebar.css';
import '../list/list.js';
import { addListItem } from '../list/list';

const buttonPlus = document.getElementById('button_plus');

if ('content' in document.createElement('template') === false) {
	throw new Error('tag "template" not supported');
} 

addListItem();
buttonPlus.addEventListener('click', addListItem);