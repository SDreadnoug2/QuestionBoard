import { useContext, useState } from 'react';
import './Ask.css'
import { askQuestion } from '../../utils/api'
import { userInfoContext } from '../../context/UserInfoContext';
import { QuestionsContext } from '../../context/QuestionsContext';

function Ask({handleQuestionAsk}) {
  const [question, setQuestion] = useState("");
  const handleQuestionInput = (e) => setQuestion(e.target.value);
  const questionsList = useContext(QuestionsContext);

  const userInfo = useContext(userInfoContext);

  async function handleQuestionAsk(Q) {
    try {
      const question = await askQuestion(Q);
      console.log(question);
      questionsList.push({question});
      setQuestion("");
    }
    catch {
      console.error("Issue Posting Question.")
    }

  }

  return (
      <div>
          <label htmnlfor="question">Ask your question</label>
          <input type="text" value={question} onChange={handleQuestionInput}id="question" name="question"></input>
          <button type="submit" onClick={() => handleQuestionAsk(question)}>Submit</button>
      </div>
  )
}

export default Ask
