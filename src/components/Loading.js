import React, {Fragment} from "react";
import logo from "../assets/logos/logo.svg";
import styled from 'styled-components';

const Wrapper = styled.img`
  justify-content: center;
  animation: spin infinite 3s linear;
  height: 30vmax;
  
  @keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

// Default Loading
const Loading = (img = logo) =>(
    <Fragment>
        <Wrapper src={img} alt={"Loading..."}/>
    </Fragment>
);

export default Loading
