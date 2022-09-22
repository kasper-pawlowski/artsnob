import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

export const Wrapper = styled(Div100vh)`
    display: flex;
    overflow: hidden;
    background-color: ${({ color }) => color};
    position: relative;
    transition: background-color 0.2s linear;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Shape_1 = styled.div`
    background-color: #3c989b;
    position: absolute;
    top: -150px;
    left: 30%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(80px);
`;

export const Shape_2 = styled.div`
    background-color: #fcb232;
    position: absolute;
    top: 150px;
    left: 45%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(80px);
    @media (max-width: 768px) {
        top: 300px;
    }
`;

export const Shape_3 = styled.div`
    background-color: #3c989b;
    position: absolute;
    bottom: -60%;
    left: -10%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(80px);
`;
