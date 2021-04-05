import React from "react";

import Header from "./layout/Header"

class TodoApp extends React.Component{
    state = {
        todos : [
            {
                id : 1,
                title : "First todo",
                complete : true
            },
            {
                id : 2,
                title : "Second todo",
                complete : true
            },
            {
                id : 3,
                title : "Third todo",
                complete : false
            }
        ]
    }

    render(){
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default TodoApp;