import { AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import { Button } from './NextButton.styles';

const NextButton = ({ nextAction, isSelected, bounds }) => {
    const ref = useRef();

    const handleMouseMove = (e) => {
        ref.current.style.transition = '';
        const { offsetX: x, offsetY: y } = e.nativeEvent;
        const { offsetWidth: width, offsetHeight: height } = e.nativeEvent.target;

        let move = 25;
        const xMove = (x / width) * (move * 2) - move;
        const yMove = (y / height) * (move * 2) - move;

        ref.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
    };

    const handleMouseLeave = () => {
        ref.current.style.transform = '';
        ref.current.style.transition = 'transform 0.2s linear';
    };

    const handleMouseEnter = () => {
        ref.current.style.transition = 'transform 0.2s linear';
    };

    return (
        <AnimatePresence>
            {isSelected && (
                <Button
                    bounds={bounds}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={nextAction}>
                    NEXT
                </Button>
            )}
        </AnimatePresence>
    );
};

export default NextButton;
