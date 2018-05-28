import { combineReducers } from 'redux';

import info from './reducers_info';

const rootReducer = combineReducers({
  thing: 'thing'
});

export default rootReducer;
