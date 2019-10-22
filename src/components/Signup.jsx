import React, {Component} from 'react';
import {Card,Container, Form, Button, Col,Row} from "react-bootstrap";
import './Signup.css';
import axios from 'axios';
import { API_DOMAIN } from '../Constants';

 export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state = { 
      fname: '',
      lname: '',
      gender:'',
      email :'',
      password:'',
      mNumber:'',
    
    }
  }
  
      changeFNameHandler = (event) =>{
        this.setState({ fname : event.target.value });
    
  }
  
      changeLNameHandler = (event) =>{
        this.setState({ lname: event.target.value });
  
    
  }    
  
      changeGenderHandler = (event) =>{
        this.setState({ gender: event.target.id });
  }

      changeEmailHandler = (event) =>{
        this.setState({ email: event.target.value });
  
    
  } 
  
      changePasswordHandler = (event) =>{
        this.setState({ password: event.target.value });
  
    
  } 
    
      changeMNumberHandler = (event) =>{
        this.setState({ mNumber: event.target.value });
    
  } 
      submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        this.createUser();
  }

  createUser = () => {
    axios({
      url: `${API_DOMAIN}/api/v1/users`,
      method: 'post',
      data: {
        user: {
          first_name: this.state.fname,
          last_name: this.state.lname,
          gender: this.state.gender,
          email: this.state.email,
          password: this.state.password,
          mobile: this.state.mNumber,
        }
      }
    }).then((response) => {
      debugger
    }).catch((error) => {
      console.log(error, 'error');
    })
  }
render(){
    
  return(
    <Card className="Signup">
      <Container>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="Fname">
                  <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder="Enter First Name"
                      onChange={this.changeFNameHandler} />
              
                </Form.Group>
      
                <Form.Group as={Col} controlId="Lname">
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Last Name" 
                      onChange={this.changeLNameHandler}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Row}>
                  <Form.Label className= "Checkboxtext" >Gender</Form.Label>
                    <Col sm={10} className="Checkbox">
                    <Form.Check
                      onChange= {this.changeGenderHandler}
                      type="radio"
                      label="Male"
                      name=""
                      checked={this.state.gender === 'male'}
                      id="male"
                      />
                    <Form.Check
                      onChange= {this.changeGenderHandler}
                      type="radio"
                      label="Female"
                      name=""
                      checked={this.state.gender === 'female'}
                      id="female"
                      />
                    <Form.Check
                      onChange= {this.changeGenderHandler}
                      type="radio"
                      label="Others"
                      name=""
                      checked={this.state.gender === 'other'}
                      id="other"
                       />
                    </Col>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email"
                      onChange={this.changeEmailHandler} />
            
                  </Form.Group>
          
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Enter Strong Password" 
                      onChange={this.changePasswordHandler}/>
                </Form.Group>

            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridMNumber">
                  <Form.Label>Mobile Number</Form.Label>
                    <Form.Control 
                        type="Mnumber" 
                        placeholder="Mnumber"
                        onChange={this.changeMNumberHandler} />
                      </Form.Group>
            </Form.Row>
      
            <Button 
              variant="primary" 
              type="submit"
              onClick={this.submitHandler}>Submit</Button>
       </Form>
      </Container>
    </Card>
      );

    }
  }