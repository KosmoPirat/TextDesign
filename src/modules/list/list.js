import "./list.css";

if ('content' in document.createElement('template')) {

    let listItem = document.querySelector('.list__item'),
    listHead = document.querySelector('.list__head'),
    listText = document.querySelector('.list__text');

    function getInnerText() {
        return document.getElementById('text-input').value;
    }

    function putHeadAndText(innerText) {
        innerText.split('\n');
        listHead.innerHTML =  (innerText[0] === "") ? "Новая заметка" : innerText[0];
        listText.innerHTML =  (innerText[1] === undefined) ? "" : innerText[1];
    }

    function cloneMark() {
        return document.importNode(listItem.content, true);
    }

    function putMark() {
        return document.querySelector('.list').appendChild(cloneMark());
    }

} else {
    console.log('Browser not supported tag "template"');
}