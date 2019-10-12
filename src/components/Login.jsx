import React,{Component} from 'react';
import {Card, Container, Form,Button} from 'react-bootstrap';
import './Login.css';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {email: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    
      handleChange = (event) => {
        
        this.setState({email: event.target.value,
      });
      }
      handleSubmit = (event) => {
        window.alert('Your Email is:'+ this.state.email);
        event.preventDefault();
 
      }
    render(){
        return(
            
            <Container className="Login">
            
            <Card style={{width: '28rem'}}>   
            <Form onSubmit={this.handleSubmit}>
            <Form.Group className="email" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  value={this.state.email} onChange={this.handleChange} placeholder={this.props.user.Name}
  />
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  placeholder="Password" />
            </Form.Group>
            
            <Button className="loginButton"   type="submit"  value="Submit">
              Submit
            </Button>
          </Form>
          
          </Card>
           
            </Container>
            
        );
    }
}
export default Login;