import Div100vh from 'react-div-100vh';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data';

export const Wrapper = styled(Div100vh)`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${data[data.length - 1]?.color};
    position: relative;
    gap: 40px;
    flex-direction: column;
`;

export const Text = styled.p`
    color: #ffffff;
    z-index: 1;
    font-size: 18px;
`;

export const Percents = styled.p`
    font-size: 170px;
    font-weight: 700;
    z-index: 1;
`;

export const Button = styled(Link)`
    padding: 25px 60px;
    border-radius: 100vw;
    background-color: #ffffff;
    transition-duration: 0.2s;
    z-index: 1;
    color: #1a1a1a;
    font-size: 18px;
    font-weight: 600;

    &:hover {
        background-color: #1a1a1a;
        color: #ffffff;
    }
`;

export const Shape_1 = styled.div`
    background-color: #88b4e4;
    position: absolute;
    top: -150px;
    left: 30%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(80px);
`;

export const Shape_2 = styled.div`
    background-color: #f5d692;
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
    background-color: #88b4e4;
    position: absolute;
    bottom: -60%;
    left: -10%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(80px);
`;
