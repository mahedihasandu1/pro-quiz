import React from 'react';
import { Link } from 'react-router-dom';

import Img from'./cover.jpg'
const Cover = () => {
    return (
        <div>
           <section className='grid sm:grid-cols1 md:grid-cols-2 gap-6 bg-orange-100'>
            <div>
                <h1 className='text-blue-800  font-bold text-center text-5xl mt-4'>Welcome To Pro Quiz World</h1>
                <p className='text-2xl font-bold ml-10 '>To Practice This type of Quiz Click </p>
                <ul className='text-2xl  font-bold mt-4 ml-20'>
                    <li  className='w-1/6 text-center font-medium mr-4 mb-5 text-white  py-2 rounded bg-primary hover:text-deep-purple-accent-400'><Link to='/quiz/1'> React</Link></li>
                    <li className=' w-1/6 text-center font-medium mr-4 mb-5 text-white  py-2 rounded bg-primary hover:text-deep-purple-accent-400'> <Link to='/quiz/2'>Java Script</Link></li>
                    <li className=' w-1/6 text-center font-medium mr-4 mb-5 text-white  py-2 rounded bg-primary hover:text-deep-purple-accent-400'> <Link to='/quiz/4'> Css</Link></li>
                    <li className='w-1/6 text-center font-medium mr-4 mb-5 text-white  py-2 rounded bg-primary hover:text-deep-purple-accent-400'> <Link to='/quiz/5'>Git</Link></li>
                </ul>
            </div>
            <div>
                <img src={Img} alt="" />
            </div>
           </section>
        </div>
    );
};

export default Cover;