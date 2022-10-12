import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const SingleQuiz = () => {
    const quizData=useLoaderData();
    const {name,questions}=quizData.data;
    
    return (
        <div className='w-[70%] mx-auto pt-5 bg-white'>
            <h2 className='text-2xl font-bold text-primary text-center '>Quiz Of {name}</h2>
            <div>
                
                {
                    questions.map((que,index) => <Question index={index} key={que.id} que={que}></Question>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;