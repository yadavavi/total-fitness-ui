import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousels.css'

export default class Carousels extends Component{
    render(){
        return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/img_3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <q>Success usually comes to those who are too busy to be looking for it.

</q>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/img_2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <q>All progress takes place outside the comfort zone.</q>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/img_4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <q>The clock is ticking. Are you becoming the person you want to be?</q>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        );

    }
}