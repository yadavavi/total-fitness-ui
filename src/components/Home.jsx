import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Row, Col, Image, Button, Container} from 'react-bootstrap';
import Grid from "react-bootstrap";
import './Home.css';
//import Carousels from './components/Carousels';

export default class Home extends Component{
    render(){
      console.log(this.props);
        return(
            <Container >
                <Jumbotron>
                    <h1>
                    Welcome to World of Fitness.
                    </h1>
                    <p>
                        <q>
                            Fitness is not a destination. It's a journey
                        </q>
                    </p>
                    <Link to="/about">
                    <Button className="button"bsStyle="primary">About</Button>
                 </Link> 
                </Jumbotron>
                <h2>
                      Feature Classes
                </h2>
                <Container>
  <Row>
    <Col xs={12} sm={4}>
      <Image className="featureClass" src="/assets/img_2.jpg" thumbnail />
     <div className="p-4">
      <h3 >YOGA</h3>
      <p>Yoga can therefore be defined as a means of uniting the individual spirit with the universal spirit of God</p>
      </div>
    
    </Col>
    <Col xs={12} sm={4}>
      <Image className="featureClass" src="/assets/img_3.jpg" thumbnail />
      <div className="p-4">
      <h3 >RUNNING</h3>
      <p>Runnig is good for building strenght and stamina.Runnnnnnn........</p>
      </div>
    </Col>
    <Col xs={12} sm={4}>
      <Image className="featureClass" src="/assets/img_4.jpg" thumbnail />
      <div className="p-4">
      <h3 >GYM</h3>
      <p>Gym is dedicated to helping you get healthy, breathe better, decrease stress, increase body strength and achieve your overall fitness goals.</p>
      </div>
    </Col>
  </Row>
</Container>
            </Container>
        );

    }
}