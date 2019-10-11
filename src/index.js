import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from "./redux/rootReducer";
import {createStore} from "redux";
import {Provider} from "react-redux"
import {applyMiddleware, compose} from "redux"
import * as serviceWorker from './serviceWorker';
import reduxThunk from "redux-thunk"

const logMiddleware = store => next => action =>{
    console.log(`Before ${JSON.stringify(store.getState())}`)
    next(action);
    console.log(`After ${JSON.stringify(store.getState())}`)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logMiddleware, reduxThunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
