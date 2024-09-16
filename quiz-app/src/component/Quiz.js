import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";
const Quiz = () => {
    console.log(QuestionsData);
  
    const [current, setCurrent] = useState(0);
    const { score, setScore, setAppState } = useContext(DataContext);
    const [selectChoice, setSelectChoice] = useState("");
    const checkAnswer = () => {
      if (selectChoice == "") return;
      if (selectChoice === QuestionsData[current].answer) {
        setScore(score + 1);
        nextQuestion();
      } else {
        nextQuestion();
      }
    };
    const nextQuestion = () => {
      setSelectChoice("");
      if (current === QuestionsData.length - 1) {
        setAppState("score");
      } else {
        setCurrent(current + 1);
      }
    };
  
    useEffect(() => {
      checkAnswer();
    }, [selectChoice]);
    return (
      <div className="quiz">
        <h1>{QuestionsData[current].question}</h1>
        <div className="options">
          <button
            onClick={() => {
              setSelectChoice("A");
            }}
          >
            {QuestionsData[current].A}
          </button>
          <button
            onClick={() => {
              setSelectChoice("B");
            }}
          >
            {QuestionsData[current].B}
          </button>
          <button
            onClick={() => {
              setSelectChoice("C");
            }}
          >
            {QuestionsData[current].C}
          </button>
          <button
            onClick={() => {
              setSelectChoice("D");
            }}
          >
            {QuestionsData[current].D}
          </button>
        </div>
        <p>
          {current + 1} / {QuestionsData.length}
        </p>
        <p>เลือกคำตอบ: {selectChoice}</p>
      </div>
    );
  };
  
  export default Quiz;