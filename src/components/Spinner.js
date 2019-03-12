import React, {Fragment} from "react";
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
const Spinner = (img, text, speed) => (
        <Fragment>
            <Wrapper src={img} alt={text} style={{"animation": "spin infinite " + {speed} + "s linear;"}} />
        </Fragment>
);

export default Spinner
