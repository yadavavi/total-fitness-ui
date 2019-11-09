import React, {Component} from 'react';
import {Card,Container, Form, Button, Col,Row,DropdownButton,Dropdown} from "react-bootstrap";
import './Signup.css';
import axios from 'axios';
import { API_DOMAIN } from '../Constants';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import {Formik, useFormik} from 'formik' ;
import * as Yup from 'yup';


class Signup extends Component {
  constructor(props){
  super(props);
    
  }
handleSuccessFullAuth(status){
  this.props.handleLogin(status);
  this.props.history.push("/dashboard")
}
render(){


  return(
    <Card className="Signup">
    <Container>
      <h1>Register! </h1>
  <Formik
    onSubmit={ (values) => {
    console.log(values);
    axios({
      url: `${API_DOMAIN}/api/v1/users`,
      method: 'post',
      data: {
        user: {
          first_name: values.fname,
          last_name: values.lname,
          gender:'male',
          email: values.email,
          password: values.password,
          mobile: values.mNumber,
        }
      }
    },{withCredentials: true})
    .then((response) => {
      console.log(response);
      if(response.status === 200)
     this.handleSuccessFullAuth(response);
     
    }).catch((error) => {
      console.log(error, 'error');
    })
     
      
    } }
    initialValues={{
      fname: 'Avinash',
      lname: '',
      email :'',
      password:'',
      gender:'',
      mNumber:'',
}}
validationSchema={ Yup.object({

  fname: Yup.string()
  .max(10,'Must be 10 charaters or less')
  .required('Required'),

  lname: Yup.string()
  .max(10,'Must be 10 charaters or less')
  .required('Required'),

  gender : Yup.string()
  .oneOf(["male","female","others"],"Invalid Gender Type")
  .required("Required"),

  email : Yup.string()
  .email("Invalid email addresss`")
  .required("Required"),

  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
 
  

  mNumber: Yup.string()
  .matches(  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  , "Phone number is not valid")
  .required("No Number is Provided")


})}
    

  >
        

{({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors
    
      }) => (


        <Form className="Form-Control" onSubmit={handleSubmit}  >
            <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text"
                      name="fname"
                      id="fname"
                      value={values.fname}
                      placeholder="Enter First Name"
                      onChange={handleChange} 
                      onBlur={handleBlur}/>
                       {touched.fname && errors.fname ? (
        <div>{errors.fname}</div>
      ) : null}
              
                </Form.Group>
      
                <Form.Group as={Col} >
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="lname"
                      id="lname"
                      placeholder="Enter Last Name" 
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {touched.lname && errors.lname ? (
        <div>{errors.lname}</div>
      ) : null}
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Gender</Form.Label>
                  </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} >
                  <select name="gender" id="gender" 
                              onChange={handleChange}
                              onBlur={handleBlur}>
                      <option selected value="">Select a Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                  </select>
                  {touched.gender && errors.gender ? (
        <div>{errors.gender}</div>
      ) : null}
                      
            
                  </Form.Group>
                  </Form.Row>
            <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      onBlur={handleBlur} />
                       {touched.email && errors.email ? (
        <div>{errors.email}</div>
      ) : null}
            
                  </Form.Group>
          
                <Form.Group as={Col} >
                  <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password"
                      id="password" 
                      placeholder="Enter Strong Password" 
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                       {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}
                </Form.Group>

            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Mobile Number</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="mNumber"
                        id="mNumber"
                        placeholder="Mnumber"
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        {touched.mNumber && errors.mNumber ? (
        <div>{errors.mNumber}</div>
      ) : null}
                         
                      </Form.Group>
            </Form.Row>
      
            <Button 
              variant="primary" 
              type="submit"
              variant="info"
              >Submit</Button>
       </Form>
     
      )}
</Formik>
</Container>
      </Card>
);

  
}
}


export default Signup;


 