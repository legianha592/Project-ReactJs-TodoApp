import React from "react";

import Header from "./layout/Header"
import Todos from "./Todos"

class TodoApp extends React.Component{
    state = {
        todos : [
            {
                id : 1,
                title : "First todo",
                completed : true
            },
            {
                id : 2,
                title : "Second todo",
                completed : true
            },
            {
                id : 3,
                title : "Third todo",
                completed : false
            }
        ]
    }

    handleCheckboxChange = (id) => {
        this.setState({
            todos : this.state.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteTodoItem = (id) => {
        this.setState({
            todos : this.state.todos.filter(todo => {
                return todo.id !== id;
            })
        })
    }

    render(){
        return (
            <div className="container">
                <Header />
                <Todos todos={this.state.todos} 
                    handleChange={this.handleCheckboxChange}
                    deleteTodo={this.deleteTodoItem}/>
            </div>
        );
    }
}

export default TodoApp;