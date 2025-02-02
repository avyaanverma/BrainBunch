import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Navbar from './Navbar'
import Quiz from './components/Quiz'
import Result  from './components/Result'
import { QuizContext } from './Helpers/QuizContext'


function App() {
  const [quizState, setQuizState] = useState("menu");
  const [currScore, setCurrScore] = useState(0);
  
  return (
    <>
      <QuizContext.Provider value = { {quizState, setQuizState, currScore, setCurrScore} }>

        <Navbar/>
        {quizState=="quiz" && <Quiz/>}
        {quizState=="menu" && <Menu/> }
        {quizState=="result" && <Result/>}
      </QuizContext.Provider>
    </>
  )
}

export default App
