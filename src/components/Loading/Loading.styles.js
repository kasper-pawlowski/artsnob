import { motion } from 'framer-motion';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

export const Wrapper = styled(Div100vh)`
    position: fixed;
    width: 100vw;
    z-index: 4;
    background: #1b3132;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
`;

export const Progress = styled(motion.div)`
    height: 3px;
    background: white;
`;
