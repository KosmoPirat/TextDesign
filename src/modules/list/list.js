import "./list.css";


let listItem = {

    listItemsHTML: document.querySelector('.list__item'),
    cloneListItem: null,
    listHead: document.querySelector('.list__head'),
    listText: document.querySelector('.list__text'),
    innerText: null,

    getListHead() {
        return document.querySelector('.list__head');
    },

    getListText() {
        return document.querySelector('.list__text');
    },

    setListItemsHTML(innerText) {
        this.listHead = this.getListHead();
        this.listText = this.getListText();
        console.log(innerText);
        innerText.split('\n');
        this.listHead.innerHTML =  innerText[0] || "Новая заметка";
        this.listText.innerHTML =  innerText[1] || "";
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

    setInnerTextHTML() {
        let innerText = document.getElementById('text-input');
        innerText.value = this.innerText;
    },

    getInnerText() {
        return this.innerText;
    },

    setInnerText() {
        this.innerText = this.getInnerTextHTML();
    }
};
if ('content' in document.createElement('template')) {

    listItem.setInnerText();
    listItem.setListItemsHTML(listItem.innerText);
    listItem.cloneListItemsHTML();
    listItem.addListItemsHTML();


} else {
    console.log('Browser not supported tag "template"');
}