import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers/index'

import logger from '../middleware/logger'
import middlewareLib from '../middleware/middlewareLib'

const store = createStore(
	reducers,
	compose(
		applyMiddleware( middlewareLib ),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store