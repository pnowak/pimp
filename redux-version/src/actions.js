import { ADD_RECT, REMOVE_RECT } from './consts';

export function uniqueID() {
    return 'ID_' + Math.random().toString(36).substr(2, 16);
}

export const addRect = (id = uniqueID(), style) => ({
	type: ADD_RECT,
	id,
	style
});

export const removeRect = (id) => ({
	type: REMOVE_RECT,
	id
});