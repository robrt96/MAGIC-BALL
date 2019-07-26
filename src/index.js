import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

import "./styles.css";

const rotate = keyframes`
  0% {
    color: coral;
    border-color: coral;  }

  33.33% {
    color: #1cbc73;
    border-color: #1cbc73;  }

  66.66% {
    color: #330867;
    border-color: #330867;  }

    0% {
    color: coral;
    border-color: coral;  }
`;

const Button = styled.button`
  font-weight: 900;
  background: transparent;
  border: 2px solid;
  color: inherit;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const Container = styled.div`
  box-sizing: border-box;
  background: transparent;
  border: 2px solid;

  color: inherit;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 550px;
  height: fit-content;
  box-shadow: 3px 3px 0 white, 8px 8px 0;
  user-select: none;
`;

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  color: coral;
  border-color: coral;
  font-family: sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 10s ease-in-out infinite;
  transition: all 4s cubic-bezier(1, 0, 0, 1);
  :hover {
    color: #330867;
    border-color: #330867;
  }
`;

function App() {
  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  const [ballAns, setBallAns] = useState("");
  const [counter, setCounter] = useState(0);

  function clickButton() {
    setBallAns(answers[Math.floor(Math.random() * answers.length)]);
    setCounter(counter + 1);
  }

  return (
    <AppContainer>
      <Container>
        <h1>Magic 8-Ball</h1>
        {ballAns !== "" ? <h1>{ballAns}</h1> : <h1>Im ready when you are</h1>}
        {counter < 3 ? (
          <Button onClick={clickButton}>GO!</Button>
        ) : (
          <h4>No more questions for you</h4>
        )}
      </Container>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
