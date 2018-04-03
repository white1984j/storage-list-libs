export default state => next => action => {

	console.log( action.loadAllLib )

	if( action.loadAllLib ){
		return next({
			...action,
			payload: JSON.parse(localStorage.getItem('libs')) || []
		});
	} 

	if( action.addLocalStorage ){
		var locStor = JSON.parse(localStorage.getItem('libs')) || [];
		console.log(action.payload.lib)
		locStor.push(action.payload.lib);
		localStorage.setItem('libs', JSON.stringify(locStor)  )
		return next(action);
	}

	else{
		return next(action);
	}

}