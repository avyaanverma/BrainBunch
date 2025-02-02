import React, { useContext } from 'react'
import { Button } from './button'
import { QuizContext } from '@/Helpers/QuizContext'

const colors = {
  green: 'bg-green-300',
  yellow: 'bg-yellow-300',
}
const images = {
  planning:'/public/planning.png',
  research:'/public/research.png',
  studying:'/public/studying.png',

}
function Card({color, imageType, title}) {
  let bgColor = colors[color]
  const {quizState, setQuizState} = useContext(QuizContext)

  return (
    
    <div className={`${bgColor} static w-1/4 h-full flex justify-center items-center select-none`}>
      {/* if the cards length < 2 then there will one extra card for add new card */}
      <div className="card bg-white w-[25rem] h-[35rem] rounded-xl p-12 flex flex-col justify-center content-center shadow-2xl">
        <div className="close flex flex-col justify-center items-end ">
          <img src="/public/bin.png" className='mb-4 size-12 hover:opacity-80 cursor-pointer' alt="My Image" />
        </div>
      <img src={`${images[imageType]}`}  className='mb-4' alt="My Image" />
        <p className='text-lg mb-4 text-center'>
          {title.toUpperCase()}
        </p>
        <div className='relative top-16 flex flex-col items-center z-0'>
          <Button onClick={()=>{setQuizState("quiz")}} className='w-3/4'>Take Quiz</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
