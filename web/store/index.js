import { createStore,
         combineReducers,
         applyMiddleware,
         compose } from 'redux'
import { todos } from './reducers'
import stateData from './initialState'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

// logger configuration
const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    result = next(action)
    console.groupEnd()
}
//saver configuration-localStroge
const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}
//Creates a Redux store that holds the complete state tree of your app
const storeFactory = (initialState=stateData) =>
    createStore(
        combineReducers({todos}),
        ((localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            stateData
        ),
        composeWithDevTools(
        applyMiddleware(thunk, logger, saver)
    ))

export default storeFactory
