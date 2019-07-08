import './sidebar.css';
import '../list/list.js';
import { addListItem } from '../list/list';

const sidebar = document.querySelector('.sidebar');
const buttonPlus = document.getElementById('button_plus');
const buttonShow = document.querySelector('.button-show_hidden');
const sidebarFooter = document.querySelector('.sidebar__footer');

if ('content' in document.createElement('template') === false) {
	throw new Error('tag "template" not supported');
} 

addListItem();
buttonPlus.addEventListener('click', addListItem);

const hideSidebar = () => {
    sidebar.classList.toggle('sidebar_hidden');
    buttonShow.classList.toggle('button-show');
};

sidebarFooter.addEventListener('click', hideSidebar);