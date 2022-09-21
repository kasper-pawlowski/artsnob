import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtContainer from '../../components/ArtContainer/ArtContainer';
import QuizContainer from '../../components/QuizContainer/QuizContainer';
import data from '../../data';
import { Shape_1, Shape_2, Shape_3, Wrapper } from './Quiz.styles';

const Quiz = ({ setPoints, setSelectedAnswers, points }) => {
    const [step, setStep] = useState(0);
    const [selectedId, setSelectedId] = useState();
    const [isSelected, setIsSelected] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setPoints(0);
        setSelectedAnswers([]);
        sessionStorage.clear();
    }, []);

    const nextAction = () => {
        setSelectedId();
        setIsSelected(false);
        if (step === data.length - 1) {
            navigate('/results', { state: 'quiz' });
        } else {
            setStep((step) => step + 1);
        }
    };

    return (
        <Wrapper color={data[step].color}>
            <QuizContainer
                points={points}
                step={step}
                setStep={setStep}
                setPoints={setPoints}
                setSelectedAnswers={setSelectedAnswers}
                isSelected={isSelected}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                setIsSelected={setIsSelected}
            />
            <ArtContainer step={step} isSelected={isSelected} nextAction={nextAction} />
            <Shape_1 />
            <Shape_2 />
            <Shape_3 />
        </Wrapper>
    );
};

export default Quiz;
