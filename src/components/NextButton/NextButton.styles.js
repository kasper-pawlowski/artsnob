import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0%{box-shadow: 0 0 0 0 #ffffffb5}
    50%{box-shadow: 0 0 0 12px transparent}
`;

export const Button = styled(motion.button)`
    position: absolute;
    border: none;
    background-color: white;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    font-size: 28px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 2s ${animation} infinite cubic-bezier(0.4, 0, 1, 1);
    color: #000;
    top: 50%;
    translate: 0 -50%;
    left: ${({ bounds }) => `${bounds.width - 130}px`};
    @media (max-width: 768px) {
        right: -5%;
        width: 150px;
        height: 150px;
        font-size: 20px;
    }
`;
