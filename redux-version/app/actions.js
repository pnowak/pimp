import { ADD_RECT, REMOVE_RECT, CHANGE_RECT_STYLE, RESET_RECT_STYLE } from './consts';

const cuid = require('cuid');

export const addRect = ({
  	id = cuid(),
  	style = styles
} = {}) => ({
  	type: ADD_RECT,
  	rect: { id, style }
});

export const removeRect = (id) => ({
	type: REMOVE_RECT,
	rect: { id }
});

export const changeStyle = (name, value) => ({
	type: CHANGE_RECT_STYLE,
	styles: { styles[name] = value } 
});

export const resetStyle = () => ({
	type: RESET_RECT_STYLE 
});