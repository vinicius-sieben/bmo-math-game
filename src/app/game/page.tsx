"use client";

import EmptyHeart from "../components/emptyHeart/emptyHeart";
import FilledHeart from "../components/filledHeart/filledHeart";
import Input from "../components/input/input";
import { useEffect, useState } from "react";
import OperationIcon from "../components/operationIcon/operationIcon";
import randomNumber from "../components/randomNumber/randomNumber";
import Number from "../components/number/number";

import "./game.css";

export default function Game() {
  const [playerHP, setPlayerHP] = useState([true, true, true]);

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  useEffect(() => {
    setFirstNumber(String(randomNumber()));
  }, []);

  useEffect(() => {
    setSecondNumber(String(randomNumber()));
  }, []);

  return (
    <>
      {/* Player HP */}
      <div id="player-hp">
        {playerHP.map((HP, index) => {
          if (HP === true) {
            return <FilledHeart key={index} />;
          }
          return <EmptyHeart key={index} />;
        })}
      </div>

      {/* Inputs */}
      <div id="inputs-container">
        <Number number={firstNumber} />

        <OperationIcon src="/plus-icon.svg" />

        <Number number={secondNumber} />

        <OperationIcon src="/equals-icon.svg" />

        <Input
          id="answerInput"
          fN={String(firstNumber)}
          sN={String(secondNumber)}
          playerHP={playerHP}
          setPlayerHP={setPlayerHP}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
        />
      </div>

      <p id="blue-button-message">
        Press the <span>blue button</span> to go back...
      </p>
    </>
  );
}
