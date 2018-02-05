import { createStore, CombineReducer, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from './reducer.js';
// import {main as mainReducer} from './reducer.js';

const mainReducer = (s = null) => s;

export default createStore(
    combineReducer({
        main: mainReducer,
        form: formReducer
    }),
    applyMiddleware(thunk)
)