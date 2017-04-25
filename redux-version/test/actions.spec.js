import *as actions from '../app/actions';
import * as types from '../app/consts';

describe('actions', () => {
  it('should create an rect to add a rect', () => {
    const Id = actions.cuid();
    const defaultStyles = {
	    'width': '100px',
	    'height': '100px',
	    'background-color': '#000000',
	    'border-radius': 0
	};
    const expectedAction = {
      	type: types.ADD_RECT,
      	rects: {
	      	id: Id,
	      	style: defaultStyles
      	}
    }
    expect(actions.addRect(Id, defaultStyles)).toEqual(expectedAction)
  })
})