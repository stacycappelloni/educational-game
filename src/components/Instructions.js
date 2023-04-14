// Stacy Cappelloni
import styled from "styled-components";

export default function Instructions({ setPlayingFunction }) {
  return (
    <InstructionWrapper>
      <InstructionTitle>Welcome to the Culinary Academy!</InstructionTitle>
      <InstructionText>
        Test your knowledge of basic food safety to see how many stars you can
        earn with this educational quiz!
      </InstructionText>
      <InstructionButton onClick={() => setPlayingFunction(true)}>
        Start Quiz
      </InstructionButton>
    </InstructionWrapper>
  );
}

const InstructionWrapper = styled.div`
  max-width: 600px;
  border: solid #106cad 5px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  margin-bottom: 0.8rem;
  margin-top: 8rem;
`;

const InstructionTitle = styled.h2`
  color: #106cad;
  margin: 0.75rem;
  font-size: 1.75rem;
`;

const InstructionText = styled.p`
  color: #106cad;
  margin-left: 1.95rem;
  margin-right: 1.95rem;
  font-size: 1.05rem;
  font-family: sans-serif;
  text-align: left;
`;

const InstructionButton = styled.button`
  background-color: #106cad;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  color: #fff;
  margin-top: 2vh;
  margin-bottom: 1rem;
  padding: 0.75rem 0.95rem 0.75rem 0.95rem;
`;
