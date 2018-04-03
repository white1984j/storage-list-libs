import { ADD_LIB, LOAD_ALL_LIB } from '../constants'

export function addLib( lib ){
	return({
		type: ADD_LIB,
		payload: {lib},
		addLocalStorage: true
	})
}

export function loadAllLib(){
	return({
		type: 'LOAD_ALL_LIB',
		loadAllLib: true
	})
}