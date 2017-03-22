'use strict';

import get from './helpers/get';

class Filter {

    addClassDisappear(e) {
        const divs  = Array.from(document.querySelectorAll('.gallery li'));
        const value = get('filter').value;
        let parts = value.split(', ');

        this.removeClassDisappear();

        if (value.length > 0) {
            divs.forEach(function(item, index) {
                if (item.children[1].style[parts[0].trim()] !== parts[1].trim()) {
                    item.classList.add('disappear');
                }
            });
        }
    }

    removeClassDisappear() {
        const divs  = Array.from(document.querySelectorAll('.gallery li'));

        divs.forEach(function(item, index) {
            if (item.classList.contains('disappear')) {
                item.classList.remove('disappear');
            }
        });
    }
};

export default Filter;