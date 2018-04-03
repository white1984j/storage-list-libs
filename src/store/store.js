import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers/index'

import logger from '../middleware/logger'

const store = createStore(
	reducers,
	compose(
		applyMiddleware( logger ),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store