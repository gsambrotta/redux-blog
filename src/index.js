import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import PostList from './components/PostList'
import PostNew from './components/PostNew'
import PostShow from './components/PostShow'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
   	<Switch>
   		// :id is like a wildcard - React try to mactch anything it will come after post/
   		<Route path='/post/:id' component={PostShow} />
   		<Route path='/posts/new' component={PostNew} />
   		<Route path='/' component={PostList} />
	  </Switch>
	 </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
