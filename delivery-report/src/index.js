import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {DeliveryForm} from './components/delivery-form'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DeliveryForm />, document.getElementById('root'));
registerServiceWorker();
