import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import TodoApp from './containers/todoApp';
import todoReducer from './reducers/todoReducer';

let todoStore = createStore(todoReducer);

//TodoApp start point
ReactDOM.render(
    <Provider store={todoStore}>
        <TodoApp/>
    </Provider>,
    document.getElementById('rootApp'));