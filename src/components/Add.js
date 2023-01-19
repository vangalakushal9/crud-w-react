import React, { Fragment, useState } from "react";
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";
import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom'


const Add = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('');


    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();

        let uniqueId = ids.slice(0,8)

        let a = name,
         b = age,
         c = location,
         d = position;

         Employee.push({id:uniqueId, Name:a, Age:b, Location:c, Position:d})
         history('/');
    }

    return(
        <Fragment>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <FormGroup className="mb-3" controlId="formName">
                    <FormControl type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formAge">
                    <FormControl type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formlocation">
                    <FormControl type="text" placeholder="Enter Location" required onChange={(e) => setLocation(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formPosition">
                    <FormControl type="text" placeholder="Enter Position" required onChange={(e) => setPosition(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <Button  onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </Fragment>
    )
}

export default Add;