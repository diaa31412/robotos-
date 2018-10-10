import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore,   applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App.js';
import 'tachyons';
import {searchRobots, requestRobotos} from './reducers.js';
import registerServiceWorker from './registerServiceWorker';


const logger=createLogger();
const rootReducer= combineReducers({searchRobots,requestRobotos})
const store=
createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
