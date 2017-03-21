'use strict';

import get from './helpers/get';

class Filter {

    getValue(e) {
        const divs  = Array.from(document.querySelectorAll('.gallery li'));
        const value = get('filter').value;
        let parts = value.split(', ');

        divs.forEach(function(item, index) {
            if (item.children[1].style[parts[0].trim()] !== parts[1].trim()) {
                item.classList.add('disappear');
            }
        });
    }
};

export default Filter;