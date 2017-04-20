import { ADD_RECT, REMOVE_RECT, CHANGE_RECT_STYLE } from './consts';

var cuid = require('cuid');

export const addRect = (id = cuid(), style) => ({
  	type: ADD_RECT,
  	rect: { id, style }
});

export const removeRect = (id) => ({
	type: REMOVE_RECT,
	rect: { id }
});

export const changeStyle = (name, value) => ({
	type: CHANGE_STYLE,
	name = value 
});