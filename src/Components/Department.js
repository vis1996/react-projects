import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddDepartmentModal } from "./AddDepartmentModal";

export class Department extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    this.setState({
      deps: [
        { DepartmentID: 1, DepartmentName: "IT" },
        { DepartmentID: 2, DepartmentName: "Support" },
        { DepartmentID: 3, DepartmentName: "Operation" }
      ]
    });
  }

  render() {
    const { deps } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <th>DepartmentID</th>
            <th>DepartmentName</th>
          </thead>
          <tbody>
            {deps.map(dep => (
              <tr key={dep.DepartmentID}>
                <td>{dep.DepartmentID}</td>
                <td>{dep.DepartmentName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Department
          </Button>

          <AddDepartmentModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }
}
