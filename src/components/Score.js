// Stacy Cappelloni
import styled from "styled-components";

export default function Score({ numPoints }) {
  return (
    <ScoreWrapper>
      <ScoreText>Stars: {numPoints}/5</ScoreText>
    </ScoreWrapper>
  );
}

const ScoreWrapper = styled.div`
  background-color: #106cad;
  border-radius: 3px;
  font-size: 1rem;
  color: #fff;
  margin-top: 2vh;
  width: fit-content;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  position: absolute;
`;

const ScoreText = styled.h3`
  color: var(--textColor);
  margin: 0.75rem;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 500;
`;
