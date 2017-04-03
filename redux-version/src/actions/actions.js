const ADD_RECT = 'ADD_RECT';
const REMOVE_RECT = 'REMOVE_RECT';

export const addRect = (style) => ({
	type: ADD_RECT,
	id: uniqueId(),
	style
})

export const removeRect = (id) => ({
	type: REMOVE_RECT,
	id
})