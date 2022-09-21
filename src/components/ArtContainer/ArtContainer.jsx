import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import useMeasure from 'react-use-measure';
import data from '../../data';
import Glass from '../Glass/Glass';
import NextButton from '../NextButton/NextButton';
import ProgessBar from '../ProgressBar/ProgressBar';
import { ArtWrapper, Frame, Img, Wrapper } from './ArtContainer.styles';
import frame from '../../assets/frame.png';

const ArtContainer = ({ step, isSelected, nextAction }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [paintRef, paintBounds] = useMeasure();
    const [frameRef, frameBounds] = useMeasure();

    return (
        <Wrapper>
            <ArtWrapper>
                <Img
                    ref={paintRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                    key={data[step].paint}
                    src={data[step].paint}
                    alt=""
                />
                <Frame ref={frameRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0 }} src={frame} alt="" />
                <NextButton nextAction={nextAction} isSelected={isSelected} bounds={frameBounds} />
            </ArtWrapper>
            <Glass isSelected={isSelected} bounds={paintBounds} />
            {isMobile && <ProgessBar step={step} />}
        </Wrapper>
    );
};

export default ArtContainer;
