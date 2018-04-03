import {ADD_LIB, LOAD_ALL_LIB} from '../constants'

const defaultState = []

export default function libs( state = defaultState, action ){
	switch( action.type ){
		case LOAD_ALL_LIB:
			return action.payload;
		case ADD_LIB:
			return [
				...state,
				action.payload.lib
			]
		default:
			return state;	
	}
}