import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';
import configureStore from './src/redux/store/index';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));