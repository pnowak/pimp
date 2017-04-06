import *as actions from '../app/actions';
import * as types from '../app/consts';

describe('actions', () => {
  it('should create an rect to add a rect', () => {
    const uId = actions.uniqueID();
    const expectedAction = {
      type: types.ADD_RECT,
      id: uId
    }
    expect(actions.addRect(uId)).toEqual(expectedAction)
  })
})