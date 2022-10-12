import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ que, index}) => {
    const { question, options, correctAnswer } = que;

    const handleAnswer = correctAnswer => {
        toast.info(correctAnswer)
    }

    const handleClick = e => {
        if (e === correctAnswer) {
            toast.success('Correct Answer', { autoClose: 1000 },)
        }
        else {
            toast.error('Wrong Answer')
        }
    }
   
    return (
        <div className='text-medium '>
            <div className='flex justify-between mx-10'>
                <h1 className='text-xl font-semibold'>  QuizNo:{index +1}  {question}</h1>
                <button onClick={() => handleAnswer(correctAnswer)}> <EyeIcon class="h-6 w-6 mb-2 text-error" /></button>
            </div>
            <div className='mx-10 grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    options.map(option =>
                        <label className='border bg-pink-200 p-2 rounded' onClick={() => handleClick(option)} htmlFor=''>
                            <input type="radio" name='action'></input>
                            <p className=''>{option}</p>
                        </label>
                    )
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"></ToastContainer>
        </div>
    );
};

export default Question;