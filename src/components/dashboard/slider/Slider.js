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
        const size = "100%";
        const altTag = [
            null
        ];
        let index=0;
        return (
            <div id="Slider" className="slider-wrapper">
                <Carousel pauseOnHover={true}>
                    <Carousel.Item>
                        <div className="img-wrapper" >
                            <img width={size} height={size} alt={altTag} src={""} style={{"background-image": "url("+path[index]+")"}} />
                        </div>
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[index]}</h3>
                                <p>{context[index++]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-wrapper">
                            <img width={size} height={size} alt={altTag} src={""} style={{"background-image": "url("+path[index]+")"}} />
                        </div>
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[index]}</h3>
                                <p>{context[index++]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-wrapper">
                            <img width={size} height={size} alt={altTag} src={""} style={{"background-image": "url("+path[index]+")"}} />
                        </div>
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[index]}</h3>
                                <p>{context[index++]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-wrapper">
                            <img width={size} height={size} alt={altTag} src={""} style={{"background-image": "url("+path[index]+")"}} />
                        </div>
                        <Carousel.Caption>
                            <div className="caption-wrapper">
                                <h3>{label[index]}</h3>
                                <p>{context[index]}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}

export default Slider;