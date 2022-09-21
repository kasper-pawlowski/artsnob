import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon, Wrapper } from './Points.styles';

const Points = ({ points, isResults }) => {
    const [storedPoints, setStoredPoints] = useState();

    const location = useLocation();

    useEffect(() => {
        if (points) {
            sessionStorage.setItem('points', `${points}`);
        } else if (sessionStorage.getItem('points') !== null) {
            setStoredPoints(JSON.parse(sessionStorage.getItem('points') || ''));
        }
    }, [points]);

    return location.pathname === '/results' && !points ? (
        <Wrapper isResults={isResults}>
            <Icon />
            <p>{storedPoints ? storedPoints : 0} points</p>
        </Wrapper>
    ) : (
        <Wrapper isResults={isResults}>
            <Icon />
            <p>{points ? points : 0} points</p>
        </Wrapper>
    );
};

export default Points;
