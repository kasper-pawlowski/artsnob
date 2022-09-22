import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Loading from './components/Loading/Loading';
// import Quiz from './pages/Quiz/Quiz';
import Results from './pages/Results/Results';
const Quiz = React.lazy(() => import('./pages/Quiz/Quiz'));
// const Results = React.lazy(() => import('./pages/Results/Results'));

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
                            <React.Suspense fallback={<Loading />}>
                                <Quiz
                                    points={points}
                                    setPoints={setPoints}
                                    selectedAnswers={selectedAnswers}
                                    setSelectedAnswers={setSelectedAnswers}
                                />
                            </React.Suspense>
                        }
                    />
                    <Route path="/results" element={<Results points={points} selectedAnswers={selectedAnswers} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Root;
