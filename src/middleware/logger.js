export default state => next => action => {
	console.log( state, action );
	next(action);
	console.log( state, action );
}