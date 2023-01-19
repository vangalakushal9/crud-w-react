import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

    let history = useNavigate();

    const handleDelete = (Id) => {
        let index = Employee.map(function (e) {
            return e.Id
        }).indexOf(Id);

        Employee.splice(index, 1);

        history('/')
    }

   const handleEdit = (id, name, age, location, position) => {
      localStorage.setItem('Name', name)
      localStorage.setItem('Age', age)
      localStorage.setItem('Location', location)
      localStorage.setItem('Position', position)
      localStorage.setItem('Id', id)
   }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Location
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0 ?
                                Employee.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                {item.Location}
                                            </td>
                                            <td>
                                                {item.Position}
                                            </td>
                                            <td>
                                                <Link to={`/edit`}>
                                                    <Button onClick={() => handleEdit(item.Id, item.Name, item.Age, item.Location, item.Position)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : <tr className='text-center'>
                                    "No Data Found"
                                </tr>
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-2' to={`/create`}>
                    <Button size='lg'>
                        Create
                    </Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;