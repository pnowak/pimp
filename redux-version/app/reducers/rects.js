import { ADD_RECT, REMOVE_RECT } from '.././consts';

function rects(state = [], action) {
    switch (action.type) {
        case ADD_RECT:
            return state.concat([
                {
                    id: action.id,
                    style: action.styles 
                }
            ]);
        case REMOVE_RECT:
            return rects
                .filter((id, rect) => {
                    return id !== rect.id;
                });           
        default:
            return state;
    }
}

export default rects;