import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'react-bootstrap'
import './Slider.css'

const path = "../../../assets/images/";
const wrappers = [
    "carousel.png",
    "carousel.png",
    "carousel.png",
    "carousel.png",
];

class Slider extends Component{
    render() {
        return (
            <div id="slider-wrapper" className=" ">
                <Carousel pauseOnHover={true}>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={{path}+wrappers[0]} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500"  src={{path}+wrappers[1]} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500"  src={{path}+wrappers[2]} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500"  src={{path}+wrappers[3]} />
                        <Carousel.Caption>
                            <h3>Forth slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}

export default Slider;