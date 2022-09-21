import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
    position: fixed;
    background: #ffffff86;
    z-index: 2;
    background-color: rgba(209, 215, 221, 0.09);
    background-image: radial-gradient(circle farthest-side at 0% 0%, hsla(0, 0%, 100%, 0.32), hsla(0, 0%, 100%, 0) 56%);
    backdrop-filter: blur(4em);
    @media (min-width: 768px) {
        top: 0;
        height: 100%;
        border-left: 2px solid #ffffff21;
        left: ${({ left }) => `${left}px`};
        width: ${({ width }) => `${width}px`};
    }
    @media (max-width: 768px) {
        bottom: 0;
        width: 100%;
        border-top: 2px solid hsla(0, 0%, 100%, 0.13);
        top: ${({ top }) => `${top}px`};
        height: ${({ height }) => `${height}px`};
    }
`;

export const Texture = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.23;
    mix-blend-mode: screen;
    object-fit: cover;
`;
