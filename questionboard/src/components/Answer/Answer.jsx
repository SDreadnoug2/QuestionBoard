import React, {useContext, useState } from 'react'
import { QuestionsContext } from '../../context/QuestionsContext'
import Question from "../Question/Question";
import './Answer.css'

function Answer() {

  const questions = useContext(QuestionsContext);
  console.log(questions);
  return (
      <div className='questions__list'>
        {questions.map((item) => (
          <Question key={item._id} question={item.question}/>
        ))}
      </div>
  )
}

export default Answer
