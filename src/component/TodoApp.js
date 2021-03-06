import React, {useEffect, useState} from "react"
import {v4 as uuid} from "uuid"
import axios from "axios"

import Header from "./layout/Header"
import Todos from "./Todos"
import AddTodo from "./AddTodo"

//C2: dung Functional component
function TodoApp(){
    const [state, setState] = useState({
        todos : []
    })

    const handleCheckboxChange = (id) => {
        setState({
            todos : state.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    const deleteTodoItem = (id) => {
        axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
            .then(response => {
                console.log("Success delete!");
                setState({
                    todos : [...state.todos.filter(todo => {
                        return todo.id !== id;
                    })]
                })
            })
    }

    const addTodoItem = (title) => {
        const todoData = {
            title : title,
            completed : false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log("Success data: ", response.data);
                setState({
                    todos : [...state.todos, response.data]
                })
            })
    }

    useEffect(() => {
        const config = {
            params : {
                _limit : 10
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => {
                setState({
                    todos : response.data
                })
            })
    }, [])

    return(
        <div className="container">
            <Header />
            <AddTodo addTodo={addTodoItem}/>
            <Todos todos={state.todos}
                handleChange={handleCheckboxChange}
                deleteTodo={deleteTodoItem}/>
        </div>
    )
}


//C1: dung Class component
// class TodoApp extends React.Component{
//     state = {
//         todos : []
//     }

//     handleCheckboxChange = (id) => {
//         this.setState({
//             todos : this.state.todos.map(todo => {
//                 if (todo.id === id){
//                     todo.completed = !todo.completed;
//                 }
//                 return todo;
//             })
//         })
//     }

//     deleteTodoItem = (id) => {
//         axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
//             .then(response => {
//                 console.log("Success delete!");
//                 this.setState({
//                     todos : [...this.state.todos.filter(todo => {
//                         return todo.id !== id
//                     })]
//                 })
//             })
//     }

//     addTodoItem = (title) => {
//         const todoData = {
//             title : title,
//             completed : false
//         }
//         axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
//             .then(response => {
//                 console.log("Success data: ", response.data);
//                 this.setState({
//                     todos : [...this.state.todos, response.data]
//                 })
//             })
//     }

    
//     componentDidMount(){
//         const config = {
//             params : {
//                 _limit : 10
//             }
//         }
//         axios.get("https://jsonplaceholder.typicode.com/todos", config)
//             .then(response => this.setState({
//                 todos : response.data
//             }))
//     }

//     render(){
//         return (
//             <div className="container">
//                 <Header />
//                 <AddTodo addTodo={this.addTodoItem}/>
//                 <Todos todos={this.state.todos} 
//                     handleChange={this.handleCheckboxChange}
//                     deleteTodo={this.deleteTodoItem}/>
//             </div>
//         );
//     }
// }

export default TodoApp;