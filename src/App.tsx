import React from 'react';
import './App.css';
import QuestionCard from './QuestionCard';


const startTrivia =  async () => {
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

} 

function App () {
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">
        Score:
      </p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
  }



export default App;
