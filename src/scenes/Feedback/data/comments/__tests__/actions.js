import * as actions from '../actions';

describe('Feedback data comments actions', () => {
	it('should dispatch an action to add a comment', () => {
		const payload = { name: 'a', email: 'a', rating: 1, comment: 'a' };
		const expectedAction = {
			type: actions.ADD,
			payload,
		};

		expect(actions.add(payload)).toEqual(expectedAction);
	});
});
