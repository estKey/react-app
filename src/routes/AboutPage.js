import React from 'react'
import {randSentence} from "../components/dashboard/mock/MockContent";

const name_zh = "关于我们";
const name_en = "About Us";
const about_content = randSentence();
function AboutPage() {

    return (
        <div id="About" style={{display:"block",height:"100%"}}>
            <span className="-row-spaced"/>
            <h1 className=" ">{name_zh}</h1>
            <h2>{about_content}</h2>
        </div>
    );
}

AboutPage.propTypes = {
};

export default AboutPage;