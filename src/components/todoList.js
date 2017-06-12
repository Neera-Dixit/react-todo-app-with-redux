import React,{Component} from 'react';
import { connect} from 'react-redux'
import TodoItem from './todoItem';

//Todolist component which displays the todo items
export default class TodoList extends Component {
    constructor(props){
        super(props);
    }

    render(){

        const {todos,actions} = this.props;
        
        const todoItems = todos.map((itemObj,index)=>{
            return (<TodoItem {...itemObj} key={index} {...actions} />);
        });

        return (
            <div id="todoList">
                {todoItems}
            </div>
        )
    }
}