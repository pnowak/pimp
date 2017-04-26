import { CHANGE_RECT_STYLE, RESET_RECT_STYLE } from '.././consts';

const defaultStyles = {
    'width': '100px',
    'height': '100px',
    'background-color': '#000000',
    'border-radius': 0
};

function styles(state = defaultStyles, action) {
    switch (action.type) {
        case CHANGE_RECT_STYLE:
            return Object.assign({}, state, {
                action[name]: action[value]
            });   
        case RESET_RECT_STYLE:
            return Object.assign({}, state, {
                defaultStyles
            });               
        default:
            return state;
    }
}

export default styles;