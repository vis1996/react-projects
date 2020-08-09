import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddEmployeeModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col sm={6}>
                <Form>
                  <Form.Group controlId="EmployeeName">
                    <Form.Label>EmployeeName </Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      placeholder="EmployeeName"
                    />
                    <Form.Label>DOJ </Form.Label>
                    <Form.Control
                      type="date"
                      name="DOJ"
                      required
                      placeholder="DOJ"
                    />
                    <Form.Label>DOB </Form.Label>
                    <Form.Control
                      type="date"
                      name="DOB"
                      required
                      placeholder="DOB"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.submit}>
            Submit
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
