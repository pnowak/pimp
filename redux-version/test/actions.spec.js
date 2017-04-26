import *as actions from '../app/actions';
import * as types from '../app/consts';

describe('actions', () => {
  	it('should create an rect - ADD_RECT', () => {
	    const Id = actions.cuid();
	    const defaultStyles = {
		    'width': '100px',
		    'height': '100px',
		    'background-color': '#000000',
		    'border-radius': 0
		};
	    const addRectAction = {
	      	type: types.ADD_RECT,
	      	rects: {
		      	id: Id,
		      	style: defaultStyles
	      	}
	    };
	    expect(actions.addRect(Id, defaultStyles)).toEqual(addRectAction);
  	});

  	it('should remove an rect - REMOVE_RECT', () => {
	    const Id = actions.cuid();
	    const defaultStyles = {
		    'width': '100px',
		    'height': '100px',
		    'background-color': '#000000',
		    'border-radius': 0
		};
	    const addRect = {
	      	type: types.ADD_RECT,
	      	rects: {
		      	id: Id,
		      	style: defaultStyles
	      	}
	    };
	    const removeRectAction = {
	      	type: types.REMOVE_RECT,
	      	rects: {
		      	id: Id
	      	}
	    };
	    expect(actions.removeRect(Id)).toEqual(removeRectAction);
  	});

  	it('should change style - CHANGE_RECT_STYLE', () => {
	    const changeStyleAction = {
	      	type: types.CHANGE_RECT_STYLE,
	      	styles: {
		      	'background-color': '#ffffff'
	      	}
	    };
	    expect(actions.changeStyle('background-color', '#ffffff')).toEqual(changeStyleAction);
  	});

  	it('should reset style - RESET_RECT_STYLE', () => {
  		const resetStyleAction = {
	      	type: types.RESET_RECT_STYLE,
	    };
	    expect(actions.resetStyle()).toEqual(resetStyleAction);
  	});
})