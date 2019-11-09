import React,{Component} from 'react';
import {Card, Container, Form,Button} from 'react-bootstrap';
import './Login.css';
import axios from 'axios';
import { API_DOMAIN } from '../Constants';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {email: "",
                  password:"",
                loginerror:""};
        
    }
    
      handleChangeEmail = (event) => {
        
        this.setState({email: event.target.value,
      });
      }
      handleChangePassword = (event) => {
        
        this.setState({password: event.target.value,
      });
      }
      handleSubmit = (event) => {
         console.log("Logged");
        event.preventDefault();
        this.loginUser();
 
      }
      loginUser = () =>{

        axios({
          url: `${API_DOMAIN}/api/v1/login`,  // to be create by amit 
           method:'post',
          data:  {
              user:{
                email: this.state.email,
                password: this.state.password,
              }
            }
          },{withCredentials:true}
        )
        .then((response) => {
          console.log("res from login", response)
        }).catch((error) => {
          console.log('log in error',error);
        })
    
      }
    render(){
        return(
            
            <Container className="Login">
            
            <Card style={{width: '28rem'}}>   
            <Form onSubmit={this.handleSubmit}>
            <Form.Group className="email" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"   onChange={this.handleChangeEmail} placeholder="Email"
  />
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  placeholder="Password"
                onChange={this.handleChangePassword} />
            </Form.Group>
            
            <Button className="loginButton"   type="submit"  value="Submit">
              Log In
            </Button>
          </Form>
          
          </Card>
           
            </Container>
            
        );
    }
}
export default Login;