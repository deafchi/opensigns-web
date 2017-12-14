import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
