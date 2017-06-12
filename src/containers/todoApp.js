import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import todoActions from '../actions/todoActions'
import todoCss from '../components/todoAppStyles';
import TodoTitle from '../components/todoTitle';
import TodoForm from '../components/todoForm';
import TodoList from '../components/todoList';

//TodoApp container which has subcomponents TodoTitle,TodoForm and TodoList
class TodoApp extends Component {
    constructor(){
        super();
    }

    render(){

        const {todos,actions} = this.props;

        return (
            <div id="reactApp">
                <TodoTitle title="React Todo App"/>
                <TodoForm placeHolder="What needs to be Done?" {...actions}/>
                <TodoList todos={todos} actions={actions}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);