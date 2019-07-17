import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import loginreducer from './Redux/loginReducer';
import { combineReducers } from 'redux';
import studentReducer from './Redux/studentReducer';


const rootReducer = combineReducers({
    loginreducer,
    studentReducer
  })

const store = createStore(loginreducer);

// ReactDOM.render(<Provider store = {store}><Router><App /></Router></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store = {store}><Router><App /></Router></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
