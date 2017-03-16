'use strict';

class Editor {

    constructor() {
        this.nextId = 1;
    }

    get(id) {
        return document.getElementById(id);
    }

    createDiv(value = this.nextId++, style) {
        const gallery = document.getElementById('listGallery');
        const output = document.getElementById('output');
        const li = document.createElement('li');
        const div = document.createElement('div');

        div.style.cssText = style || output.style.cssText;
        div.setAttribute('id', value);

        li.appendChild(div);
        gallery.insertBefore(li, gallery.firstChild);

        li.insertAdjacentHTML('afterbegin', '<button class="close">x</button>');

        localStorage.setItem(div.id, div.style.cssText);
    }

    closeDiv(e) {
        const src = e.target;
        const div = src.nextSibling;
        const parent = src.parentNode;

        if (src.nodeName.toLowerCase() === "button") {
            localStorage.removeItem(div.id);
            parent.parentNode.removeChild(parent);
        }
    }

    setValue(e) {
        const style = this.get('output').style;
        let target = e.target;
        let value = parseInt(target.value) ? target.value + 'px' : target.value;

        style[target.name] = value;
    }

    getLocal() {
        let divs = localStorage;
        for (let div in divs) {
            this.createDiv(div.id, divs[div]);
        }
    }
};

const editor = new Editor();

const saveButton = editor.get('save');
const controlInputs = editor.get('controls');
const gallery = editor.get('listGallery');

controlInputs.addEventListener('input', (e) => { editor.setValue(e) }, false);
saveButton.addEventListener('click', () => { editor.createDiv() }, false);
gallery.addEventListener('click', editor.closeDiv, false);

document.addEventListener('DOMContentLoaded', () => { editor.getLocal() }, false);