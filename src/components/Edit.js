import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";
import { useNavigate } from 'react-router-dom'

const Edit = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    let index = Employee.map(function (e) {
        return e.Id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employee[index]

        a.Name = name;
        a.Age = age;
        a.Location = location;
        a.Position = position;

        history('/');
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setLocation(localStorage.getItem('Location'))
        setPosition(localStorage.getItem('Position'))
        setId(localStorage.getItem('Id'))
    }, [])


    return (
        <Fragment>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <FormGroup className="mb-3" controlId="formName">
                    <FormControl type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formAge">
                    <FormControl type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formlocation">
                    <FormControl type="text" placeholder="Enter Location" value={location} required onChange={(e) => setLocation(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formPosition">
                    <FormControl type="text" placeholder="Enter Position" value={position} required onChange={(e) => setPosition(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </Fragment>
    )
}

export default Edit;