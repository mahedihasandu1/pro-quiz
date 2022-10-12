import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from './Component/Home/Home'
import Blog from './Component/Blog/Blog'

import Main from "./Layout/Main";
import Statistics from "./Component/Statistics/Statistics";
import SingleQuiz from "./Component/SingleQuiz/SingleQuiz";

export const router=createBrowserRouter([
    {path:'/',element:<Main></Main>, errorElement:<ErrorPage></ErrorPage>,children:[
        {path:'/', element:<Home></Home> ,loader: () => fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'/home', element:<Home></Home> ,loader: () => fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'statistics', element:<Statistics></Statistics> },
        {path:'blog', element:<Blog></Blog>},
        {path:'/quiz/:id',element:<SingleQuiz></SingleQuiz>,loader:({params}) =>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) },
    ]}
])