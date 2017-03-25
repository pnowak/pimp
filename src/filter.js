'use strict';

import get from './helpers/get';
import hexToRGB from './helpers/hexToRGB';

class Filter {

    addClassDisappear(e) {
        const divs  = Array.from(document.querySelectorAll('.gallery li'));
        const value = get('filter').value;
        let parts = value.split(', ');

        this.removeClassDisappear();

        if (value.length > 0) {
            let nameTrim = parts[0].trim();
            let valueTrim = parts[1].trim();

            if (valueTrim.startsWith('#')) {
                valueTrim = hexToRGB(valueTrim);
            }

            divs.forEach(function(item, index) {
                if (item.children[1].style[nameTrim].replace(/\s+/g, '') !== valueTrim) {
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