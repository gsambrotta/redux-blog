import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action) {
	switch(action.type) {

		case DELETE_POST:
			return _.omit(state, action.payload)

		case FETCH_POSTS:
			return _.mapKeys(action.payload, 'id')

		case FETCH_POST:
			return { ...state, [action.payload.id]: action.payload }
	}

	return state
}
