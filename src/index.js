import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import serviceworker from './serviceworker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceworker();
