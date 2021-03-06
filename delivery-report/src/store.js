import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
// import {reducer as mainReducer} from './reducer';

const mainReducer = (s = null) => s;

export default createStore(
    combineReducers({
        main: mainReducer,
        form: formReducer

    }),
    composeWithDevTools(applyMiddleware(thunk))

);