import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import './Slider.css'
import {randSentence} from "../mock/MockContent";

const path = [
    "https://fairwaysgolf.ca/wp-content/uploads/2016/07/tarandowah-900x500.jpg",
    "https://i.pinimg.com/originals/93/1d/37/931d3730c90fb42f7c4b3307be665b68.jpg",
    "https://theheartofontario.com/wp-content/uploads/2018/03/OPERATOR-Piper-Heath-golf-course-4-1440x960.jpg",
    "https://theheartofontario.com/wp-content/uploads/2018/03/OPERATOR-Gelncairn-Golf-Club-2-1440x960.jpg",
];

const label = [
    "First slide label",
    "Second slide label",
    "Third slide label",
    "Forth slide label",
];

const context = [
    randSentence(1),
    randSentence(1),
    randSentence(1),
    randSentence(1),
];

class Slider extends Component{
    render() {
        return (
            <div id="slider-wrapper" className=" ">
                <Carousel pauseOnHover={true}>
                    <Carousel.Item>
                        <img width="100%" height="100%" alt="900x500" src={path[0]} />
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[0]}</h3>
                                <p>{context[0]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" height="100%" alt="900x500"  src={path[1]} />
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[1]}</h3>
                                <p>{context[1]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" height="100%" alt="900x500"  src={path[2]} />
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[2]}</h3>
                                <p>{context[2]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" height="100%" alt="900x500"  src={path[3]} />
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[3]}</h3>
                                <p>{context[3]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}

export default Slider;