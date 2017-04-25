export const ADD = 'Feedback/data/comments/ADD';

export const add = payload =>
	(payload.name && payload.email && payload.rating && payload.comment && ({
		type: ADD,
		payload,
	}))
