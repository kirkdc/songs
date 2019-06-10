import React from 'react';
import ReactDOM from 'react-dom';
//provider and createStore imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App'
import reducers from './reducers';


//PROVIDER TAG HAS TO BE AT THE TOP OF THE COMPONENT HIERACHY


ReactDOM.render(
// have to wrap the App with Provider. You have to pass provider a single prop called store. Inside it you have to createStore and passing in the reducers.
<Provider store={createStore(reducers)}>
<App />
</Provider>,
document.querySelector('#root')
);