import { ADD } from '../actions';
import { reducer } from '../reducer';

describe('Feedback data comments reducer', () => {
	it('should initiate', () => {
		const initialState = [];

		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should add a comment to state', () => {
		const payload = { name: 'Name', email: 'email', rating: 1, comment: 'Comment' };
		const stateAfter = [payload];

		expect(reducer([], {
			type: ADD,
			payload
		})).toEqual(stateAfter);

		const newState = [...stateAfter];
		stateAfter.push(payload);

		expect(reducer(newState, {
			type: ADD,
			payload
		})).toEqual(stateAfter);
	});
});
