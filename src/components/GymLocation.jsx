import React,{Component} from 'react';
import {Container,Card,Carousel} from 'react-bootstrap';
import './GymLocation.css';

export default class GymLocation extends Component{

   state={
     showLocation : false,
   }

   toggleLocationHandler = () =>{

    const toggleLocation = this.state.showLocation;
    this.setState({
      showLocation : !toggleLocation,
    });

   }
    render(){

      let Location = null;
      if(this.state.showLocation){
           Location = ( <div>
            <Card className="gymCard">
                
                <Card.Header>Fitness-First</Card.Header>
                <Card.Body>    
                    <Card.Text>Fitness First, the leading fitness center in India with world class health club equipment, gym trainers, group exercise classes, freestyle training & much more.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="gymCard">
                
                    <Card.Header>World-Gym</Card.Header>
                <Card.Body>    
                    <Card.Text>World Gym changed my life. ... I am a better mother, better spouse and an all around better human being because of this gym.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="gymCard">
                
                    <Card.Header>Gold-Gym</Card.Header>
                <Card.Body>    
                    <Card.Text>Our personal trainers, fitness classes and digital tools will be with you every step. Find gyms near me, fitness center near me, & 24 hour gyms near me.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="gymCard">
                
                    <Card.Header>Any-Time-Fitness</Card.Header>
                <Card.Body>
                    <Card.Text>Anytime Fitness – your neighborhood 24 hour gym. With thousands of convenient, welcoming locations worldwide, we'll help you get to a healthier place.
                    </Card.Text>
                </Card.Body>
            </Card>
           </div> );

      }


        return(
            <Container className="gymContainer">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/hero_bg_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Find A Gym</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/hero_bg_2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3> Find A Gym</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
        <button onClick={this.toggleLocationHandler}>Find A Gym</button>
         {  
           Location
           
          }
            </Container>

        );
    }
}