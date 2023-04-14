// Stacy Cappelloni
import { useState } from "react";
import styled from "styled-components";
import Score from "../components/Score";

const STYLES = {
  noStyle: {
    "--border": "7px solid #fff",
    "--background": "#fff",
    "--textColor": "#106cad"
  },
  correct: {
    "--border": "7px solid #00a82d",
    "--background": "#abdbb8",
    "--textColor": "#00a82d"
  },
  incorrect: {
    "--border": "7px solid #cc0202",
    "--background": "#edbbbb",
    "--textColor": "#cc0202"
  }
};

export default function QuestionDisplay({
  questions,
  answerOptions,
  correctAnswers,
  finishGameFunction,
  finalScoreFunction
}) {
  const [index, setIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [buttonTypes, setButtonTypes] = useState([
    "noStyle",
    "noStyle",
    "noStyle",
    "noStyle"
  ]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <Wrapper>
      <QuestionWrapper>
        <Question>{questions[index]}</Question>
      </QuestionWrapper>
      <AnswerWrapper>
        <AnswerGrid>
          <AnswerButton
            style={STYLES[buttonTypes[0]]}
            disabled={buttonsDisabled}
            onClick={() => answerPressed(index, 0)}
          >
            {answerOptions[index][0]}
          </AnswerButton>
          <AnswerButton
            style={STYLES[buttonTypes[1]]}
            disabled={buttonsDisabled}
            onClick={() => answerPressed(index, 1)}
          >
            {answerOptions[index][1]}
          </AnswerButton>
          {answerOptions[index].length > 2 && (
            <AnswerButton
              style={STYLES[buttonTypes[2]]}
              disabled={buttonsDisabled}
              onClick={() => answerPressed(index, 2)}
            >
              {answerOptions[index][2]}
            </AnswerButton>
          )}
          {answerOptions[index].length > 3 && (
            <AnswerButton
              style={STYLES[buttonTypes[3]]}
              disabled={buttonsDisabled}
              onClick={() => answerPressed(index, 3)}
            >
              {answerOptions[index][3]}
            </AnswerButton>
          )}
        </AnswerGrid>
        {hasAnswered && (
          <ButtonWrapper>
            {index !== questions.length - 1 ? (
              <NextButton onClick={nextButtonPressed}>Next</NextButton>
            ) : (
              <NextButton onClick={endGame}>Finish</NextButton>
            )}
          </ButtonWrapper>
        )}
        {hasAnswered && (
          <FeedbackWrapper
            style={answeredCorrectly ? STYLES["correct"] : STYLES["incorrect"]}
          >
            {answeredCorrectly ? (
              <FeedbackText>✔ Correct!</FeedbackText>
            ) : (
              <FeedbackText>✘ Incorrect</FeedbackText>
            )}
          </FeedbackWrapper>
        )}
        <Score numPoints={score}></Score>
      </AnswerWrapper>
    </Wrapper>
  );

  function answerPressed(questionIndex, answerIndex) {
    setHasAnswered(!hasAnswered);
    setButtonsDisabled(!buttonsDisabled);
    let currButtonTypes = buttonTypes;
    if (
      answerOptions[questionIndex][answerIndex] ===
      correctAnswers[questionIndex]
    ) {
      currButtonTypes[answerIndex] = "correct";
      setAnsweredCorrectly(true);
      setScore(score + 1);
    } else {
      currButtonTypes[answerIndex] = "incorrect";
      setAnsweredCorrectly(false);
    }
    setButtonTypes(currButtonTypes);
  }

  function nextButtonPressed() {
    setIndex(index + 1);
    setHasAnswered(!hasAnswered);
    setButtonsDisabled(!buttonsDisabled);
    setButtonTypes(["noStyle", "noStyle", "noStyle", "noStyle"]);
  }

  function endGame() {
    finishGameFunction(true);
    finalScoreFunction(score);
  }
}

const Wrapper = styled.div`
  margin-bottom: 5rem;
  margin-top: 1.5rem;
`;

const Question = styled.h2`
  color: #106cad;
  margin: 0.75rem;
  font-size: 1.75rem;
`;

const QuestionWrapper = styled.div`
  max-width: 600px;
  border: solid #106cad 5px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const FeedbackWrapper = styled.div`
  width: fit-content;
  border: var(--border);
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  margin-top: 2vh;
  position: absolute;
  right: 5rem;
  bottom: -4rem;
`;

const FeedbackText = styled.h3`
  color: var(--textColor);
  margin: 0.75rem;
  font-size: 1rem;
`;

const AnswerWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  position: relative;
`;

const AnswerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const AnswerButton = styled.button`
  flex: 1;
  width: 400px;
  height: 85px;
  background-color: var(--background);
  border: var(--border);
  border-radius: 10px;
  font-size: 1.2rem;
  flex-basis: 100%;
`;

const NextButton = styled.button`
  background-color: #106cad;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  color: #fff;
  margin-top: 2vh;
  padding: 0.75rem 0.95rem 0.75rem 0.95rem;
  position: absolute;
  right: 0px;
`;

const ButtonWrapper = styled.div``;

export function pressedButton() {}
