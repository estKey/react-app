import React, {Component, Fragment} from "react";
import {NavLink, withRouter} from "react-router-dom";

import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 27vh;
  align-self: center;
  align-items: center;
  text-align-all: center;
  justify-content: center;
`;
const TitleWrapper = styled.h3`
  transition: transform 2s;
  transform: rotate(-360deg);
  text-align-all: center;
  font-size: 300%;
`;
const ContentWrapper = styled.p`
  font-family: "Century Schoolbook",sans-serif;
  a.active:hover{
  zoom: 120%;
    color: cornflowerblue;
  }
  a.active, a.visited{
  color: blueviolet;
  text-decoration: none;
  }
`;
class Index extends Component{
    render() {
        return(
            <Fragment>
                <Wrapper>
                    <TitleWrapper>404 Not Found</TitleWrapper>
                    <ContentWrapper><NavLink to={"/"}>Back to Home Page</NavLink></ContentWrapper>
                </Wrapper>
            </Fragment>
        );
    }
}

export default withRouter(Index)
