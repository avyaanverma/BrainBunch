import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '@/Helpers/QuizContext'
import Quiz from './Quiz'
import { Questions } from '@/Helpers/Questions';
import { Button} from './ui/button';
function Result() {
  const {quizState, setQuizState, currScore, setCurrScore} = useContext(QuizContext);
  
  return (
    <div className='w-full h-[90vh] bg-green-300 p-7 overflow-y-hidden select-none'>
      <div className='relative h-[700px] flex flex-col  w-[900px] left-[50%] ml-[-450px] bg-white rounded-md'>
        <h1 className='font-Poppins p-5 text-center'>
          RESULT
        </h1>

        <div className='flex flex-col justify-center items-center h-[500px] w-[900px]'>
        <div className='h-[450px] w-[450px] p-11 bg-orange-500 flex flex-col justify-center items-center select-none rounded-md'>
          <p className='rounded-lg  text-white text-center text-3xl'>You have scored <br/> {currScore}/{Questions.length}</p>
          <img onClick={()=>{setQuizState("quiz"); setCurrScore(0)}} src="/public/retry.jpg" className='rounded-full mb-4 shadow-md size-14 hover:opacity-80 cursor-pointer mt-auto place-self-end ' alt="My Image" />
        </div>
           <div className='relative top-16 flex flex-col items-center z-0'>
                    <Button onClick={()=>{setQuizState("menu"); setCurrScore(0)} } className='w-3/4'>Return</Button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Result