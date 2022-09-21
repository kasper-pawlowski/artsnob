import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import data from '../../data';
import Answer from '../Answer/Answer';
import Nav from '../Nav/Nav';
import ProgessBar from '../ProgressBar/ProgressBar';
import { Answers, Question, Wrapper } from './QuizContainer.styles';

const QuizContainer = ({ step, setStep, setPoints, setSelectedAnswers, points, isSelected, selectedId, setIsSelected, setSelectedId }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const correctAnswer = data[step].answers.filter((answer) => answer.is_correct === true);
    const ans = isSelected && selectedId === correctAnswer[0].id;

    useEffect(() => {
        isSelected && setSelectedAnswers((answers) => [...answers, +ans]);
    }, [isSelected, step]);

    return (
        <Wrapper>
            <Nav points={points} />
            <Question>{data[step].question}</Question>
            <Answers>
                {data[step].answers.map((data, i) => (
                    <Answer
                        key={i}
                        data={data}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                        setPoints={setPoints}
                    />
                ))}
            </Answers>
            {!isMobile && <ProgessBar step={step} />}
        </Wrapper>
    );
};

export default QuizContainer;
