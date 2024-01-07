import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
// import Questions from '../../pages/Questions/Questions'
// import Questions from './Questions'
import QuestionList from './QuestionList'
const HomeMainbar = () => {
  
  var questionsList = [{
    
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "mano",
    askedOn: 'jan 1'
    },
    {
    
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: 'jan 1'
      },
    {
    
        id: 3,
        votes: 1,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "mano",
        askedOn: 'jan 1'
      }

  ]

  const location = useLocation()

  const user= 1;
  const navigate = useNavigate()
    
  const checkAuth = () => {
      if(user === null) {
          alert("login or signup to ask question")
          navigate('/Auth')
      }else {
        navigate('/AskQuestion')
      }
  }

    

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>AskQuestion</button>


      </div>

      <div>
        {
        questionsList === null ? <h1>Loading ... </h1> : 
        <>
          <p>{questionsList.length} questions</p>
          <QuestionList questionsList = {questionsList}/>
        </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar