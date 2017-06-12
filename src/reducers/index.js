import { createStore } from 'redux';
import todoReducer from './todoReducer';

let todoStore = createStore(todoReducer);

export default todoStore;