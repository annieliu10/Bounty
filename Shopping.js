import React, { Component } from "react";
import todosData from "./todosData";
import TodoItem from "./TodoItem";


class Shopping extends Component {
    constructor(props) {
        super(props)
        this.state={
            todos: todosData,
          
        }
    this.handleChange= this.handleChange.bind(this)
    
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                        
                    }
                }
                return todo
                 })
            return {
                
                todos: updatedTodos
            }
        })
    }
       
    
  render() {
       const todoComponents = this.state.todos.map(el => {
        return <TodoItem id={el.id}
        text={el.text}
        completed={el.completed}
         handleChange={this.handleChange}  
        />
       })
    
    
               
               return  <div>
                   <header class="banner">Bounty</header>
        <h2>Start Shopping</h2>
      
      <div className="todo-list">
          <div>Shopping List</div>
                 {todoComponents}
                 </div>
      </div>
    
  }
}
 
export default Shopping;