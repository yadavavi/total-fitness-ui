import React, {Component} from 'react';
import {Card,Row,Column, CardGroup,Nav, CardDeck} from 'react-bootstrap';
import "./About.css";

export default class About extends Component{
    render(){
        return(
            <CardDeck className="aCard">
                <Card>
            
                <Card.Img variant="top" src="/assets/Amit.jpg"/>
                <Card.Body>
                 <Card.Title>Amit</Card.Title>
                      <Card.Text>
                          Amit is a CS Engineer,a fitness freak and smart
                      </Card.Text> 
                  </Card.Body>
           </Card>
           <Card>
           <Card.Img variant="top" src="/assets/Avinash.jpg"/>
                <Card.Body>
                 <Card.Title>Avinash</Card.Title>
                      <Card.Text>
                          Avinash is a Electronics Engineer and a fitness freak
                      </Card.Text> 
                  </Card.Body>
                 
                  
                  
                  </Card>
            </CardDeck>

           
        );

    }
}