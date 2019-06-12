import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.table`
  justify-content: center;
  min-width: 100%;
`;
const Button = styled.td`
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid white;
  }
`;

export const NavItem = (props) => (
    <Fragment>
        <Button onClick={props.event} title={props.name}>{props.name}</Button>
    </Fragment>
);

export default (props) => (
    <Fragment>
        <header className={props.className}>
            <Wrapper>
                <tbody>
                <tr>
                    {props.children}
                </tr>
                </tbody>
            </Wrapper>
        </header>
    </Fragment>
);


NavItem.propTypes = {
    className: PropTypes.string,
    event: PropTypes.func,
    name: PropTypes.string,
};

NavItem.defaultProps = {
    className: "",
    event: undefined,
    name: "undefined",
};
