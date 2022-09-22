import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 10px;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: start;
    }
    @media (max-width: 1024px) {
        padding: 0 30px 10px;
    }
`;

export const ArtWrapper = styled.div`
    width: fit-content;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Frame = styled(motion.img)`
    width: 80%;
    height: fit-content;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Img = styled(motion.img)`
    position: absolute;
    height: 100%;
    left: 0;
    width: 80%;
    scale: 0.8;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
