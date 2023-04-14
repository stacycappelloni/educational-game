//Stacy Cappelloni

import styled from "styled-components";

export default function EndScreen(finalScore) {
  console.log(finalScore);
  return (
    <EndScreenWrapper>
      <EndScreenTitle>
        Congratulations! You are a {finalScore.finalScore}-star chef!
      </EndScreenTitle>
      {/* referenced: https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click */}
      <RetryButton onClick={() => window.location.reload()}>Retry</RetryButton>
    </EndScreenWrapper>
  );
}

const EndScreenWrapper = styled.div`
  max-width: 600px;
  border: solid #106cad 5px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  margin-bottom: 0.8rem;
  margin-top: 15rem;
`;

const EndScreenTitle = styled.h2`
  color: #106cad;
  margin: 0.75rem;
  font-size: 1.75rem;
`;

const RetryButton = styled.button`
  background-color: #106cad;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  color: #fff;
  margin-top: 2vh;
  margin-bottom: 1rem;
  padding: 0.75rem 0.95rem 0.75rem 0.95rem;
`;
