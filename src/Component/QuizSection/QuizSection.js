import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const QuizSection = ({ quiz }) => {
   const {logo,name,total,id}= quiz;
    
   return (
        <div className='card sm:w-[50%] sm:mx-auto w-80 bg-base-100 mb-5 mx-10 shadow-xl'>
            <div className='p-2  '>
                <img className='rounded' src={logo} alt="" />
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 items-center px-2 bg-pink-300 py-4 rounded'>
                <p className='font-bold text-primary text-center'>{name}</p>
                <p><small className='text-white md:text-sm text-medium bg-pink-400 rounded  px-2 font-semibold justify-items-center '>Total Qus:{total}</small></p>
                <Link to={`../quiz/${id}`} className='flex btn  btn-primary text-white'>Start Practice <ArrowRightIcon className="h-6 w-9 font-bold"/> </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizSection;