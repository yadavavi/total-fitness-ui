import React, {Component} from 'react';
import {Card,Container, Form, Button, Col,Row} from "react-bootstrap";
import './Signup.css';

export default class Signup extends Component{
    render(){
      return(
        <Card className="Signup">
          <Container>
        <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="Fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="Lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Row}>
      <Form.Label className= "Checkboxtext" >
        Gender
      </Form.Label>
      <Col sm={10} className="Checkbox">
        <Form.Check
          type="radio"
          label="Male"
          name=""
          id=""
        />
        <Form.Check
          type="radio"
          label="Female"
          name=""
          id=""
        />
        <Form.Check
          type="radio"
          label="Others"
          name=""
          id=""
        />
      </Col>
    </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
         
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridMNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="Mnumber" placeholder="Mnumber" />
          </Form.Group>
          </Form.Row>
      
        
      
        
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </Card>
      );

    }
}