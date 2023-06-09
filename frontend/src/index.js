import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore';


/*
const like =0;

function hello(state = like, action) {
  if (action.type == "increase") {
    state++;
    return state;
  } else if (action.type == "decrease") {
    state--;
    return state;
  } else {
    return state;
  }
}
let store = createStore(hello);
*/

const enhancer = process.env.NODE_ENV === "production"? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
