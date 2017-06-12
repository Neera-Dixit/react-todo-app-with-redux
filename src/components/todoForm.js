import React,{Component} from 'react';

//TodoForm component which allows user to add todo item
export default class TodoForm extends Component {
    constructor(props){
        super(props);
    }

    addItem = (e)=>{
        e.preventDefault();
        this.props.addItem(this.itemTextBox.value);
        this.itemTextBox.value = "";
    }

    render(){

        const {placeHolder} = this.props;

        return (
            <div id="todoForm">
                <form onSubmit={this.addItem}>
                    <input type="text" size="25" placeholder={placeHolder} ref={(input)=>this.itemTextBox = input} required/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}