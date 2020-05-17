import React from "react"
import './App.css';
import {Button, ButtonToolbar} from "react-bootstrap"
import {AddTodo} from "./AddTodo";



class TodoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state={deps:[], addTodoShow: false}
    }

render(){
     var id = localStorage.getItem(this.identity);
     let addTodoClose=() => this.setState({addTodoShow: false})


return    <div>


    <ButtonToolbar>
        <button
        class="todoButton"
        variant="primary"
        onClick={()=> this.setState({addTodoShow: true})}>
        Add Grocery Item
        </button>


        <AddTodo
        show={this.state.addTodoShow}
        onHide={addTodoClose}
        identity={id}
    />
        </ButtonToolbar>

     </div>

}
}

export default TodoButton