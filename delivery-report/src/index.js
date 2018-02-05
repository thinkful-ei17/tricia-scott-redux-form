import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Provider} from 'react-redux';
import store from './store.js';
import {DeliveryForm} from './components/delivery-form'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
  <DeliveryForm />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
