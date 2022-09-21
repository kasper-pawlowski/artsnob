import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Points from '../../components/Points/Points';
import { Button, Percents, Shape_1, Shape_2, Shape_3, Text, Wrapper } from './Results.styles';

const Results = ({ points, selectedAnswers }) => {
    const [storedPercentsOfSum, setStoredPercentsOfSum] = useState();

    const location = useLocation();

    const sum = selectedAnswers.reduce((partialSum, a) => partialSum + a, 0);
    const percentsOfSum = (sum / selectedAnswers.length) * 100;

    useEffect(() => {
        if (percentsOfSum) {
            sessionStorage.setItem('percentsOfSum', `${percentsOfSum}`);
        } else if (sessionStorage.getItem('percentsOfSum') !== null) {
            setStoredPercentsOfSum(JSON.parse(sessionStorage.getItem('percentsOfSum') || ''));
        }
    }, []);

    return location.state !== null ? (
        <Wrapper>
            <Points points={points} isResults={true} />
            <Text>Snob Level</Text>
            <Percents>{percentsOfSum ? percentsOfSum.toFixed(0) : storedPercentsOfSum ? storedPercentsOfSum?.toFixed(0) : 0}%</Percents>
            <Button to="/">BACK TO HOMEPAGE</Button>
            <Shape_1 />
            <Shape_2 />
            <Shape_3 />
        </Wrapper>
    ) : (
        <Navigate to="/" replace />
    );
};

export default Results;
