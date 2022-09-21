import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import texture from '../../assets/texture.jpeg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Texture, Wrapper } from './Glass.styles';

const Glass = ({ isSelected, bounds }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { width, height } = useWindowDimensions();

    const overlayWidth = width - bounds.left;
    const overlayHeight = height - bounds.top;

    const variants = {
        initialMobile: { y: bounds.top },
        initialDesktop: { x: bounds.left },
        animateMobile: { y: 0 },
        animateDesktop: { x: 0 },
    };

    return (
        <AnimatePresence>
            {!isSelected && (
                <Wrapper
                    left={bounds.left}
                    top={bounds.top}
                    width={overlayWidth}
                    height={overlayHeight}
                    initial={isMobile ? 'initialMobile' : 'initialDesktop'}
                    animate={isMobile ? 'animateMobile' : 'animateDesktop'}
                    exit={isMobile ? 'initialMobile' : 'initialDesktop'}
                    transition={{ duration: 0.4 }}
                    variants={variants}>
                    <Texture src={texture} alt="" />
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default Glass;
