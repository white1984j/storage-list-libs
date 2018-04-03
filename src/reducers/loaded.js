import {LOAD_ALL_LIB} from '../constants'



export default function loaded( state = false, action ){
	switch( action.type ){
		case LOAD_ALL_LIB:
			return true;
		default:
			return state;	
	}
}