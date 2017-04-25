import { combineReducers } from 'redux';

import { reducer as dataReducer } from './data/reducer';

export const reducer = combineReducers({
	data: dataReducer,
});
