
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import StudentManager from './containers/studentManager'
import SuperManager from './containers/superManager'

import Login from './containers/login'
import todoApp from './reducers'
import {Router, Route, hashHistory} from 'react-router';
let store = createStore(todoApp);
let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/classManager" component={StudentManager}/>
            <Route path="/superManager" component={SuperManager}/>
        </Router>
    </Provider>,
rootElement
);
