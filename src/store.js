import { createStore, compose, combineReducers } from 'redux';

import { reducer as feedbackReducer } from './scenes/Feedback/reducer';

const appReducer = combineReducers({
	Feedback: feedbackReducer,
});

export default createStore(
	appReducer,
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);
