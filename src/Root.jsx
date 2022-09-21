import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Quiz from './pages/Quiz/Quiz';
import Results from './pages/Results/Results';

const Root = () => {
    const [points, setPoints] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Quiz points={points} setPoints={setPoints} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />
                        }
                    />
                    <Route path="/results" element={<Results points={points} selectedAnswers={selectedAnswers} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Root;
