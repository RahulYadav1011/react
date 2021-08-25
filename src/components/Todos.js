import React from 'react'
import TodosItem from "./TodosItem"
export const Todos = (props) => {
    /*let todostyle = {
        margin: "2%",
    } */
    return (
        <div className="container" /*style={todostyle} */ >
            <h1 className="text-center">Contact List</h1>
            <p> Welcome to the Rahul React Contact list</p>

            {props.todos.length === 0? "No Contact Number Found Add New Contact Number!!!" :
                
                    props.todos.map((todo) => {
                        return <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                
            }

        </div>
    )
}
