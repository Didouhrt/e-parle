import { useState, useEffect } from "react";
import {
  FaSquareCheck,
  FaRegSquareCheck,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";
import "./QuizComponent.css";

const QuizComponent = ({
  quiz,
  activeChapterIndex,
  activeQuestionIndex,
  selectedAnswers,
  toggleAnswer,
  setQuizStarted,
  setActiveQuestionIndex,
  setSelectedAnswers,
}) => {
  const [result, setResult] = useState(null);
 const [answerClasses, setAnswerClasses] = useState(
   Array.from({
     length: quiz.questions[activeQuestionIndex].answers.length,
   }).fill("")
 );

   const [nextButtonText, setNextButtonText] = useState("Vérifier la réponse");
   const [showNextButton, setShowNextButton] = useState(true);

  const handleCheckAnswer = () => {
    const correctAnswer = quiz.questions[activeQuestionIndex].correctAnswer;
    const checkedAnswer = selectedAnswers[0];

  const incorrectAnswers = quiz.questions[activeQuestionIndex].answers.filter(
    (answer) => selectedAnswers.includes(answer) && answer !== correctAnswer
  );

 

  setAnswerClasses((prevAnswerClasses) => {
    const updatedClasses = [...prevAnswerClasses];
    incorrectAnswers.forEach((incorrectAnswer) => {
      const index =
        quiz.questions[activeQuestionIndex].answers.indexOf(incorrectAnswer);
      if (index !== -1) {
        updatedClasses[index] = "inactive_answer_container";
      }
    });
    return updatedClasses;
  });

    if (correctAnswer === checkedAnswer) {
      setResult("success");
    const incorrectAnswers = quiz.questions[activeQuestionIndex].answers.filter(
      (answer) => answer !== correctAnswer
    );

    setAnswerClasses((prevAnswerClasses) => {
      const updatedClasses = [...prevAnswerClasses];
      incorrectAnswers.forEach((incorrectAnswer) => {
        const index =
          quiz.questions[activeQuestionIndex].answers.indexOf(incorrectAnswer);
        if (index !== -1) {
          updatedClasses[index] = "inactive_answer_container";
        }
      });
      return updatedClasses;
    });
 setNextButtonText("Suivant");
 setShowNextButton(false);
    } else {
      setResult("failure");
    setSelectedAnswers([]);
    toggleAnswer(null);

    setNextButtonText("Vérifier la réponse");
    setShowNextButton(true);
    }
  };

 const handleNextQuestion = () => {
   setResult(null);
   setSelectedAnswers([]);
   toggleAnswer(null);

   if (activeQuestionIndex + 1 < quiz.questions.length) {
     setActiveQuestionIndex((prev) => prev + 1);
     setAnswerClasses(
       Array.from({
         length: quiz.questions[activeQuestionIndex + 1].answers.length,
       }).fill("")
     );
   } else {
     alert('end of quiz')
   }

   setNextButtonText("Vérifier la réponse");
   setShowNextButton(true);
 };

  
  return (
    <div className="flex_item_center quiz_container">
      {quiz.started ? (
        <div className="playQuiz_container">
          {result === "success" ? (
            <div className=" flex gap1 result_container success">
              <FaCircleCheck className="result_icon" />
              <div>
                <h5>Réponse correcte!</h5>
                <p>bien joué!</p>
              </div>
            </div>
          ) : result === "failure" ? (
            <div className=" flex gap1 result_container failure">
              <FaCircleXmark className="result_icon" />
              <div>
                <h5>Réponse incorrecte. Veuillez réessayer.</h5>
                <p>Huh!?</p>
              </div>
            </div>
          ) : null}
          <span>question {activeQuestionIndex + 1}</span>
          <h4 className="pad_top1">
            {quiz.questions[activeQuestionIndex].question}
          </h4>
          <div className="flex flex_column gap1 pad_blk1 allAnswers_container">
            {quiz.questions[activeQuestionIndex].answers.map(
              (answer, index) => (
                <div
                  key={index}
                  className={`flex_item_center gap1-2 answer_container ${answerClasses[index]}`}
                  onClick={() => toggleAnswer(answer)}
                >
                  <div className="courseContent_chapter_check_btn_container">
                    {selectedAnswers.includes(answer) ? (
                      <FaSquareCheck />
                    ) : (
                      <FaRegSquareCheck />
                    )}
                  </div>
                  <h5>{answer}</h5>
                </div>
              )
            )}
          </div>

          <button
            className={`primary_btn ${
              selectedAnswers.length === 0 && showNextButton
                ? "inactive_check_btn"
                : ""
            }`}
            onClick={showNextButton ? handleCheckAnswer : handleNextQuestion}
            disabled={selectedAnswers.length === 0}
          >
            <span>{nextButtonText}</span>
          </button>
        </div>
      ) : (
        <div className="startQuiz_container flex_column ">
          <div className="flex flex_column gap1-2">
            <h1>{quiz.name}</h1>
            <div className="flex gap1">
              <span>Quiz {activeChapterIndex + 1}</span>
              <span>|</span>
              <span>{quiz.questions.length} Questions</span>
            </div>
          </div>
          <p className="pad_blk1">{quiz.objective}</p>
          <div>
            <button
              className="primary_btn"
              onClick={() => setQuizStarted(true)}
            >
              <span>Commencer le quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
