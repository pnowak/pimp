import { ADD_RECT, REMOVE_RECT } from '.././consts;

function rects(state = [], action) {
    switch (action.type) {
        case ADD_RECT:
            return Object.assign({}, state, {
                [
                    ...state,
                    {
                        id: action.id,
                        style: action.styles
                    }
                ]
            });
        case REMOVE_RECT:
            return Object.assign({}, state, {
                [...rects.filter(id, rect) => {
                    return id !== rect.id;
                )]
            });                 
        default:
            return state;
    }
}

export default rects;