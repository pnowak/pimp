import { createStore } from 'redux';
import reducer from './reducers/index.js';
import * as actions from './actions';

let store = createStore(reducer);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(actions.addRect('ID_12as'))
store.dispatch(actions.addRect('ID_4ef'))
store.dispatch(actions.addRect('ID_100zx'))

// Stop listening to state updates
unsubscribe()