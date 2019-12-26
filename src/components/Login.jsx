import React,{Component} from 'react';
import {Card, Container, Form,Button} from 'react-bootstrap';
import './Login.css';
import axios from 'axios';
import {Formik} from 'formik';
import { API_DOMAIN } from '../Constants';
import * as Yup from 'yup';
import * as Cookies from "cookie"; 
import { sessionHandle } from './Sessionhandler';


class Login extends Component{

  constructor(props) {
    super(props);}
    
     isAuthenticated = () => {


     } 
      
    render(){
        return(
            <Formik
            
            onSubmit={(values) => {
              
              axios({
                url: `${API_DOMAIN}/api/v1/sessions`,  // to be create by amit 
                 method:'post',
                data:  {
                    user:{
                      email: values.email,
                      password: values.password,
                    }
                  }
                },{withCredentials:true}
              )
              .then((response) => {
                
                sessionHandle(response.headers);
                
                this.props.history.push("/dashboard");
                
               

              }).catch((error) => {
                console.log('log in error',error);
              })


            }}
            initialValues={{

              email: '',
              password: '',
            }


            }
            validationSchema = {Yup.object({

              email : Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),

              password: Yup.string()
              .required('No password provided.') 
              //.min(8, 'Password should be 8 character.')
             // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),



            })}
            >

{({
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors
    
      }) => (


            <Container className="Login">
            
            <Card style={{width: '28rem'}}>   
            <Form onSubmit={handleSubmit}>
            <Form.Group className="email">
              <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                            name="email"
                            id="email"  
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            placeholder="Email"/>
                            {touched.email && errors.email ? (
        <div className="error">{errors.email}</div>
      ) : null}
            </Form.Group>
          
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
                 placeholder="Password"
                  name="password"
                  id="password"
                 onChange={handleChange} 
                onBlur={handleBlur}/>
                {touched.password && errors.password ? (
        <div className="error">{errors.password}</div>
      ) : null}

            </Form.Group>
            
            <Button className="loginButton"   type="submit"  value="Submit">
              Log In
            </Button>
          </Form>
        
          </Card>
           
            </Container>
      )}
            </Formik>
            );
      
                          }
                          
                          }

export default Login;