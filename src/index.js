//import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import  counterReducer   from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import App from './App';
const rootReducer = combineReducers({
    ctr : counterReducer,
    res: resultsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

