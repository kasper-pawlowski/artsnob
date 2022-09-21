import React from 'react';
import Points from '../Points/Points';
import { Logo, Wrapper } from './Nav.styles';

const Nav = ({ points }) => {
    return (
        <Wrapper>
            <Logo>ARTSNOB</Logo>
            <Points points={points} />
        </Wrapper>
    );
};

export default Nav;
