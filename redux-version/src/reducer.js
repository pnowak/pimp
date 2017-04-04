import { combineReducers } from 'redux';
import { ADD_RECT, REMOVE_RECT } from './consts';

const initialState = {
    rects: []
};

function rects(state = initialState, action) {
    switch (action.type) {
        case ADD_RECT:
            return Object.assign({}, state, {
                rects: [
                    ...state,
                    {
                        id: action.id,
                        style: action.style
                    }
                ]
            });
        case REMOVE_RECT:
            return Object.assign({}, state, {
                return rects.filter((rect, id) => {
                    return id !== rect.id;
                });
            });                
        default:
            return state
    }
}

export default rects;