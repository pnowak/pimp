'use strict';

function hexToRGB(hex) {
    hex = hex.replace(/^#/, '');

    let num = parseInt(hex, 16);

    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

export default hexToRGB;