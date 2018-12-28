import React from "react";

export const _lorem_ipsum_strings = [
    'Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.',
    'Ut labores minimum atomorum pro. Laudem tibique ut has.',
    'Fugit adolescens vis et, ei graeci forensibus sed.',
    'Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.',
    'Ea duis bonorum nec, falli paulo aliquid ei eum.',
    'Usu eu novum principes, vel quodsi aliquip ea.',
    'Has at minim mucius aliquam, est id tempor laoreet.',
    'Pro saepe pertinax ei, ad pri animal labores suscipiantur.',
    'Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.',
    'Iisque perfecto dissentiet cum et, sit ut quot mandamus, ut vim tibique splendide instructior.',
    'Id nam odio natum malorum, tibique copiosae expetenda mel ea.',
    'Cu mei vide viris gloriatur, at populo eripuit sit.',
    'Modus commodo minimum eum te, vero utinam assueverit per eu.',
    'No nam ipsum lorem aliquip, accumsan quaerendum ei usu.'
];

export function randSentence(length = 10) {
    let ls = _lorem_ipsum_strings;
    let dist_string = '';
    do {
        dist_string += ls[Math.floor(Math.random() * ls.length)];
        length--;
    } while (length > 0);
    return dist_string;
}

export function randLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

export function randString(length = 5) {
    let string = '';
    do {
        string.append(randLetter());
        length--;
    }while (length > 0);
    return string
}

export function randDiv(length = 40) {
    let lorem_div=document.createElement("div");
    let textNode=document.createTextNode(randSentence(length));
    const lorem_class = {

    };
    lorem_div.appendChild(textNode);
    lorem_div.className = lorem_class;
    document.body.appendChild(lorem_div);
    return lorem_div;
}



export default class MockContent extends React.Component{
    render() {
        return (
            <div className="card">
                {randDiv()}
            </div>
        );
    }
}