import './sidebar.css';
import '../list/list.js';
import { addListItem } from '../list/list';
import { textInOut } from '../text/text';

const sidebar = document.querySelector('.sidebar');
const buttonPlus = document.getElementById('button_plus');
const buttonHide = document.getElementById('button_back');

if ('content' in document.createElement('template') === false) {
	throw new Error('tag "template" not supported');
} 

addListItem();
buttonPlus.addEventListener('click', addListItem);

function hideSidebar() {
		sidebar.classList.toggle('sidebar-hide');
        textInOut.classList.toggle('text-hide');
        const 
}

buttonHide.addEventListener('click', hideSidebar);