import { CHANGE_RECT_STYLE } from '.././consts';

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
                state[action[name]]: action[value]
            });               
        default:
            return state;
    }
}

export default styles;