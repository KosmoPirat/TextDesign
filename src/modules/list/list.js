
import "./list.css";


let listItem = {

    listItemsHTML: document.getElementById('templ'),
    cloneListItem: null,
    listHead: null,
    listText: null,
    innerText: null,

    getListHead() {
        return this.listItemsHTML.content.querySelector('.list__head');
    },

    getListText() {
        return this.listItemsHTML.content.querySelector('.list__text');
    },

    setListItemsHTML(innerText) {
        this.listHead = this.getListHead();
        this.listText = this.getListText();
        let itemsData = innerText.split('\n');
        this.listHead.innerHTML =  itemsData[0] || "Новая заметка";
        this.listText.innerHTML =  itemsData[1] || "";
    },

    cloneListItemsHTML() {
        let clone = this.listItemsHTML;
        this.cloneListItem = document.importNode(clone.content, true)
    },

    addListItemsHTML() {
        let list = document.querySelector('.list');
        list.appendChild(this.cloneListItem);
    },

    getInnerTextHTML() {
        return document.getElementById('text-input').value;
    },

    addInnerTextHTML() {
        let innerText = document.getElementById('text-input');
        innerText.value = this.innerText;
    },

    getInnerText() {
        return this.innerText;
    },

    setInnerText() {
        this.innerText = this.getInnerTextHTML();
    },

    delListItem() {
        let listItem = document.querySelectorAll('.list__close');
        listItem.forEach(function(item) {
                item.addEventListener("click", function(){
                    item.parentNode.parentNode.removeChild(item.parentNode);
                });
        });
    },

    listItemListener() {
        document.querySelector('.list__head').addEventListener('click', function () {
            listItem.addInnerTextHTML();
        });
    },

};

export function initListItem() {
    listItem.setInnerText();
    listItem.setListItemsHTML(listItem.innerText);
    listItem.cloneListItemsHTML();
    listItem.addListItemsHTML();
    listItem.listItemListener();
    listItem.delListItem();
}