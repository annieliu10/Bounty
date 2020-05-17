import React from "react";


function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "grey",
        textDecoration: "line-through"
    }
return <div className= "todo-item"><input type="checkbox" checked={props.completed}
    onChange={() => props.handleChange(props.id)}/>
                 <p style={props.completed ? completedStyle: null}>{props.text}</p> 
    </div>

}


// onChange={() => props.handleChange(props.id)}

export default TodoItem