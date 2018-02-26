import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './containers/Index';

ReactDOM.render(
  <BrowserRouter path="/">
  <div>
    <Route path="/" component={Index} />
  </div>
  </BrowserRouter>, 
  document.getElementById('root')
)

registerServiceWorker()
