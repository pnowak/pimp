import { combineReducers } from 'redux';
import { ADD_RECT, REMOVE_RECT } from './consts';

const initialState = {
    rects: [],
    styles: {
        'width': '100px',
        'height': '100px',
        'background-color': '#000000',
        'border-radius': 0
    }
};

function rects(state = initialState, action) {
    const { type, rect } = action;

    switch (action.type) {
        case ADD_RECT:
            return Object.assign({}, state, {
                rects: [
                    ...state,
                    {
                        id: action.id,
                        style: state.styles
                    }
                ]
            });
        case REMOVE_RECT:
            return Object.assign({}, state, {
                [...state.rects.filter(id, rect) => {
                    return id !== rect.id;
                )]
            });                 
        default:
            return state;
    }
}

export default rects;