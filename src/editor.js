'use strict';

import get from './helpers/get';

class Editor {

    constructor() {
        this.nextId = 1;
    }

    createDiv(value = this.nextId++, style) {
        const gallery = get('listGallery');
        const output = get('output');
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
        const target = e.target;
        const div = target.nextSibling;
        const parent = target.parentNode;

        if (target.nodeName.toLowerCase() === "button") {
            localStorage.removeItem(div.id);
            parent.parentNode.removeChild(parent);
        }
    }

    setStyle(e) {
        const style = get('output').style;
        const target = e.target;
        let value = parseInt(target.value) ? target.value + 'px' : target.value;

        style[target.name] = value;
    }

    resetStyle() {
        const options  = Array.from(document.querySelectorAll('.opts'));
        let style = get('output').style;

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

export default Editor;