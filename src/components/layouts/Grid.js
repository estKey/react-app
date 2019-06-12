import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";


export const Row = styled.div`
  //display: inline-grid;
  flex-direction: row;
`;

export const Col = styled.div(props => ({
    background: props.background,
    height: '50px',
    width: '50px'
}));


const Grid = (props) => {
    const Wrapper = styled.div`
    display: grid;
    min-width: 100%;
    min-height: 100%;
`;
    return (
        <Fragment>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Fragment>
    )
};

Grid.propTypes = {
    children: PropTypes.array
};

Grid.defaultProps = {
    children: null
};

export default Grid
