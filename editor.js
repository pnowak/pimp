'use strict';

class Editor {

    get(id) {
        return document.getElementById(id);
    }

    createDiv(value) {
        const gallery = document.getElementById('listGallery');
        const output = document.getElementById('output');
        const li = document.createElement('li');
        const div = document.createElement('div');

        let style = output.style.cssText;

        div.style.cssText = style; 

        li.appendChild(div);
        gallery.insertBefore(li, gallery.firstChild);

        li.insertAdjacentHTML('afterbegin', '<button class="close">x</button>');
    }

    closeDiv(e) {
        const src = e.target;
        const parent = src.parentNode;

        if (src.nodeName.toLowerCase() === "button") {
            parent.parentNode.removeChild(parent);
        }
    }

    setValue(e) {
        const output = this.get('output');
        let target = e.target;
        let name = target.name;
        let value = parseInt(target.value) ? target.value + 'px' : target.value;

        console.log(output.style.name);

        output.style.name = value;
    }
};

const editor = new Editor();

const save = editor.get('save');
const controls = editor.get('controls');
const gallery = editor.get('listGallery');

controls.addEventListener('input', (e) => { editor.setValue(e) }, false);
save.addEventListener('click', editor.createDiv, false);
gallery.addEventListener('click', editor.closeDiv, false);