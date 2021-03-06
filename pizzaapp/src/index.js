import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
const initialState={cart:[]}
function Reducer(state=initialState,actions){
  switch (actions.type) {
    case 'addcart':
        return {cart:[...state.cart,actions.payload]}
    case 'addquantity':
      return {cart:actions.payload}
    case 'getcart':
      return {cart:actions.payload}
    default:
      return state;
  }
}
const store=createStore(Reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
