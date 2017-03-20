'use strict';

function uniqueId() {
    return 'ID_' + Math.random().toString(36).substr(2, 16);
}

export default uniqueId;