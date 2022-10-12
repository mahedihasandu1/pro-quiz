import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Component/Header/Header';


export const QuizContext = createContext([])


const Main = () => {
    const quizData = useLoaderData()
    return (
        <QuizContext.Provider value={quizData}>
            <Header></Header>
            <Outlet />
        </QuizContext.Provider>
    );
};

export default Main;