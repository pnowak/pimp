'use strict';

import get from './helpers/get';
import Editor from './editor';

const editor = new Editor();

const saveButton = get('save');
const controlInputs = get('controls');
const gallery = get('listGallery');

controlInputs.addEventListener('input', (e) => { editor.setStyle(e) }, false);
saveButton.addEventListener('click', () => { editor.createDiv(), editor.resetStyle() }, false);
gallery.addEventListener('click', (e) => { editor.closeDiv(e) }, false);

document.addEventListener('DOMContentLoaded', () => { editor.getLocal() }, false);