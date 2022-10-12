import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const QuizSection = ({ quiz }) => {
   const {logo,name,total,id}= quiz;
    
   return (
        <div className='card w-96 bg-base-100 mb-5 mx-10 shadow-xl'>
            <div className='p-2'>
                <img className='rounded' src={logo} alt="" />
                <div className='flex justify-between items-center px-2 bg-pink-300 py-4 rounded'>
                <p className='font-bold text-primary'>{name}</p>
                <p><small className='text-white text-medium bg-pink-400 rounded py-3 px-2 font-semibold '>Total Qus:{total}</small></p>
                <Link to={`../quiz/${id}`} className='flex btn btn-primary text-white'>Start Practice <ArrowRightIcon className="h-6 w-6 font-bold"/> </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizSection;