import './sidebar.css';
import '../list/list.js';
import { addListItem } from '../list/list';
import { textInOut } from '../text/text';

const sidebar = document.querySelector('.sidebar');
const buttonPlus = document.getElementById('button_plus');
const buttonBack = document.getElementById('button_back');
const buttonHide = document.getElementById('button-hide');
const sidebarFooter = document.querySelector('.sidebar__footer');

if ('content' in document.createElement('template') === false) {
	throw new Error('tag "template" not supported');
} 

addListItem();
buttonPlus.addEventListener('click', addListItem);

function hideSidebar(event) {
		sidebar.classList.toggle('sidebar-hide');
        textInOut.classList.toggle('text-hide');
        buttonHide.classList.toggle('button_back-active');
}

sidebarFooter.addEventListener('click', hideSidebar);