import reducer from '../app/reducers/index.js';
import * as actions from '../app/actions';
import * as types from '../app/consts';

describe('reducers', () => {
  	it('should return the initial state', () => {
  		const initialState = {
  			styles: {
			    'width': '100px',
			    'height': '100px',
			    'background-color': '#000000',
			    'border-radius': 0
			},
  			rects: []
  		};
	    expect(
	      	reducer(undefined, {})
	    ).toEqual(initialState);
  	});

  	it('should handle ADD_RECT', () => {
  		const Id = actions.cuid();
	    expect(
	      	reducer({
	      		styles: {
				    'width': '100px',
				    'height': '100px',
				    'background-color': '#000000',
				    'border-radius': 0
				},
	  			rects: []
	      	}, {
	        	type: types.ADD_RECT,
	        	id: Id,
	        	style: {
				    'width': '100px',
				    'height': '100px',
				    'background-color': '#000000',
				    'border-radius': 0
				}
	      	})
	    ).toEqual(
	      	{
	      		styles: {
				    'width': '100px',
				    'height': '100px',
				    'background-color': '#000000',
				    'border-radius': 0
				},
	  			rects: [
	  				{
			          	id: Id,
		        		style: {
						    'width': '100px',
						    'height': '100px',
						    'background-color': '#000000',
						    'border-radius': 0
						}
			        }
	  			]
	      	}
	    )
  	});
});