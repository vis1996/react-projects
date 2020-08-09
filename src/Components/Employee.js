import React, { Component } from "react";
import { Table } from "react-bootstrap";

import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddEmployeeModal} from './AddEmployeeModal';

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { emps: [],addModalShow : false}
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    this.setState({
      emps: [
        { EmployeeID: 1, EmployeeName: "vishal" ,DOJ:"10-1-2020", DOB:"11-1-1996"},
        { EmployeeID: 2, EmployeeName: "Sanjay",DOJ:"11-1-2020", DOB:"15-1-1996" },
        { EmployeeID: 3, EmployeeName: "Venkatesh",DOJ:"23-1-2020", DOB:"14-1-1996" }
      ]
    });
  }

  render() {
    
    const { emps } = this.state;
    let addModalClose =() => this.setState({addModalShow : false});
    return (
      <div>
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <th>EmployeeID</th>
          <th>EmployeeName</th>
          <th>DOJ</th>
          <th>DOB</th>
        </thead>
        <tbody>
          {emps.map(emp => (
            <tr key={emp.EmployeeID}>
              <td>{emp.EmployeeID}</td>
              <td>{emp.EmployeeName}</td>
              <td>{emp.DOJ}</td>
              <td>{emp.DOB}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonToolbar>
        <Button variant='primary' onClick={()=> this.setState({addModalShow : true})}
        >Add Employee</Button>

        <AddEmployeeModal 
        show={this.state.addModalShow}
        onHide={addModalClose}
        />
      </ButtonToolbar>
      </div>
    );
  }
}
