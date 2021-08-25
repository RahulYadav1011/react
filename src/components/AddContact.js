import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';


export default function AddContact(props) {

    const [Name, setName] = useState(" ")
    const [mobile_no, setmobile_no] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if(!Name || !mobile_no){
            alert("Add The Name and Mobile Number")
        }
        props.addcontact(Name,mobile_no);
        setName("");
        setmobile_no("");
    }



    return (
        <div className="container my-3">
            <h2>Add Contact Number</h2>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={Name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" value={mobile_no} onChange={(e) => { setmobile_no(e.target.value) }} placeholder="Mobile Number" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ADD
                </Button>
            </Form>
        </div>
    )
}
