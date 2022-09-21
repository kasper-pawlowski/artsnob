import { motion } from 'framer-motion';
import React from 'react';
import data from '../../data';
import { Progress, ProgressWrapper, Wrapper } from './ProgressBar.styles';

const ProgessBar = ({ step }) => {
    let value = step + 1;
    const progressPercentage = (value / data.length) * 100;

    return (
        <Wrapper>
            <p>
                QUESTION {step + 1}/{data.length}
            </p>
            <ProgressWrapper>
                <Progress
                    initial={{ width: `${progressPercentage}%` }}
                    animate={{ width: `${progressPercentage}%` }}
                    as={motion.div}
                    progressPercentage={progressPercentage}
                />
            </ProgressWrapper>
        </Wrapper>
    );
};

export default ProgessBar;
