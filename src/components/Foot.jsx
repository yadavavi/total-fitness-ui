import React, {Component} from 'react';
import {Card, Row, Col, Container, CardGroup, Navbar} from 'react-bootstrap';
import "./Foot.css";

class Foot extends Component{
    render(){
        return(
            
              
          <div>
               <Card xs={12}>
                 <Card.Footer className="fcolor">
                 <Container>
                   <Row>
                   <Col xs={12} sm={4}>
                     <h3>Motivation</h3>
                     <p>
                     “Strength does not come from the physical capacity. It comes from an indomitable will.” <br></br>– Ghandi
                      </p>
                   </Col>
                   <Col xs={12} sm={4}>
                     <h3>Quick Menu</h3>
                     <ul>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">News</a></li>
                     </ul>
                   </Col>  
                   <Col xs={12} sm={4}>
                     <h3>Contact Info</h3>
                      <p> D-708, Vardhaman Residency, Wakad
                       <br></br>
                       Pune, Maharashtra
                      </p>
                    </Col>
                   </Row>
                   </Container>
                   </Card.Footer>
                   </Card> 
                   <Card>
                <Card.Footer>
                 <Container className="copyWrite">
                 &copy; {new Date().getFullYear()} Copyright: <a href="/"> Total-Fitness.com </a>
                 </Container>
                   </Card.Footer>
                   </Card>
                   </div>
                   
        );

    }
}
export default Foot;