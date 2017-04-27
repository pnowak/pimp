import { ADD_RECT, REMOVE_RECT, CHANGE_RECT_STYLE, RESET_RECT_STYLE } from './consts';

export const cuid = require('cuid');

export const addRect = (id = cuid(), style) => ({
  	type: ADD_RECT,
  	rects: [{ id, style }]
});

export const removeRect = (id) => ({
	type: REMOVE_RECT,
	rects: [{ id }]
});

export const changeStyle = (name, value) => ({
	type: CHANGE_RECT_STYLE,
	styles: { [name] : value } 
});

export const resetStyle = () => ({
	type: RESET_RECT_STYLE 
});