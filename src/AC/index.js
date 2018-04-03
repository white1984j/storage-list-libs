import { ADD_LIB } from '../constants'

export function addLib( lib ){
	return({
		type: ADD_LIB,
		payload: {lib}
	})
}