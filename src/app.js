'use strict';

import get from './helpers/get';
import debounce from './helpers/debounce';
import Editor from './editor';
import Filter from './filter';

const editor = new Editor();
const filter = new Filter();

const saveButton = get('save');
const controlInputs = get('controls');
const gallery = get('listGallery');
const filterInput = get('filter');

controlInputs.addEventListener('input', (e) => { editor.setStyle(e) }, false);
saveButton.addEventListener('click', () => { editor.createDiv(), editor.resetStyle() }, false);
gallery.addEventListener('click', (e) => { editor.closeDiv(e) }, false);
filterInput.addEventListener('input', 
	debounce(function() {
	    return filter.getValue();
	}, 2000)
);

document.addEventListener('DOMContentLoaded', () => { editor.getDataFromLocal() }, false);