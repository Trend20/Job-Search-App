import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from './reducers/jobs';
import errorsReducer from './reducers/error';

const composeEhnancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// creating the redux store
const store = createStore(
	combineReducers({
		jobs: jobsReducer,
		errors: errorsReducer,
	}),
	composeEhnancers(applyMiddleware(thunk))
);
console.log(store.getState());

export default store;
