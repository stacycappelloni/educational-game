import Game from "./components/Game";
import "./styles.css";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Game />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
