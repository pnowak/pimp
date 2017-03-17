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

        this.resetStyle();
    }

    closeDiv(e) {
        const target = e.target;
        const div = target.nextSibling;
        const parent = target.parentNode;

        if (target.nodeName.toLowerCase() === "button") {
            localStorage.removeItem(div.id);
            parent.parentNode.removeChild(parent);
        }
    }

    setStyle(e) {
        const style = this.get('output').style;
        const target = e.target;
        let value = parseInt(target.value) ? target.value + 'px' : target.value;

        style[target.name] = value;
    }

    resetStyle() {
        const options  = Array.from(document.querySelectorAll('.opts'));
        let style = this.get('output').style;

        options.forEach(function(item, index) {
            let defaultValue = item.children[1].defaultValue;
            let name = item.children[1].name;

            item.children[1].value = item.children[1].defaultValue;
            style[name] = parseInt(defaultValue) ? defaultValue + 'px' : defaultValue;
        });
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

controlInputs.addEventListener('input', (e) => { editor.setStyle(e) }, false);
saveButton.addEventListener('click', () => { editor.createDiv() }, false);
gallery.addEventListener('click', (e) => { editor.closeDiv(e) }, false);

document.addEventListener('DOMContentLoaded', () => { editor.getLocal() }, false);