import { useLoaderData } from 'react-router-dom';
import Cover from '../Cover/Cover';
import QuizSection from '../QuizSection/QuizSection';


const Home = () => {
    const loadData = useLoaderData()
    const quizData = loadData.data;
 
    return (
        <div className=' bg-pink-500'>
            <Cover></Cover>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    quizData.map(quiz =>
                        <QuizSection 
                        key={quiz.id} 
                        quiz={quiz}
                        ></QuizSection>
                        )
                }
            </div>
        </div>
    );
};

export default Home;