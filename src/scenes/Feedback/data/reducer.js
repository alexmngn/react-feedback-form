import { combineReducers } from 'redux';

import { reducer as commentsReducer } from './comments/reducer';

export const reducer = combineReducers({
	comments: commentsReducer,
});
