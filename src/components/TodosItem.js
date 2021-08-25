import React from 'react'
import { Button } from 'react-bootstrap';

export default function TodosItem(props) {
    return (
        <div>
            <h4>{props.todo.name}</h4>
            <p>{props.todo.mobile_no}</p>
            <Button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</Button>
            <hr />

        </div>
    )
}
