// Stacy Cappelloni

import { useState } from "react";
import styled from "styled-components";
import QuestionDisplay from "../components/QuestionDisplay";
import Instructions from "../components/Instructions";
import EndScreen from "../components/EndScreen";

//information from: https://www.fsis.usda.gov/food-safety
const questions = [
  "What is the temperature danger zone for food?",
  "Before working with food, you should wash your hands for ___ seconds with warm water.",
  "What is the minimum internal temperature that poultry should be cooked to?",
  "True or False: Color can be used as a reliable indicator that ground beef is safely cooked and ready to eat.",
  "Which of the following is not one of the eight most common allergenic foods?"
];
const answerOptions = [
  ["40-140°F", "20-100°F", "150-165°F", "0-35°F"],
  ["15", "10", "5", "20"],
  ["140°F", "165°F", "145°F", "200°F"],
  ["True", "False"],
  ["peanuts", "soy", "gluten/wheat", "red meat"]
];
const correctAnswers = ["40-140°F", "20", "165°F", "False", "red meat"];

export default function Game() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  return (
    <Wrapper>
      {!gameFinished ? (
        <GameWrapper>
          {isPlaying ? (
            <QuestionDisplay
              questions={questions}
              answerOptions={answerOptions}
              correctAnswers={correctAnswers}
              finishGameFunction={setGameFinished}
              finalScoreFunction={setFinalScore}
            />
          ) : (
            <Instructions setPlayingFunction={setIsPlaying} />
          )}
        </GameWrapper>
      ) : (
        <EndScreen finalScore={finalScore}> </EndScreen>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const GameWrapper = styled.div``;
