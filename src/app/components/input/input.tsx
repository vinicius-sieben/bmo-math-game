import { Dispatch, SetStateAction } from "react";
import "./input.css";
import randomNumber from "../randomNumber/randomNumber";

interface InputProps {
  id: string;
  fN: string;
  sN: string;
  playerHP: boolean[];
  setPlayerHP: Dispatch<SetStateAction<boolean[]>>;
  setFirstNumber: Dispatch<SetStateAction<string>>;
  setSecondNumber: Dispatch<SetStateAction<string>>;
}

const Input = ({
  id,
  fN,
  sN,
  playerHP,
  setPlayerHP,
  setFirstNumber,
  setSecondNumber,
}: InputProps) => {
  const submit = () => {
    let sum = Number(fN) + Number(sN);
    let inputElement = document.getElementById(
      "answerInput"
    ) as HTMLInputElement;

    if (sum === Number(inputElement.value)) {
      alert("That's correct!");
    } else {
      alert("That's not correct...");

      let ultimoIndexComTrue = 0;

      playerHP.map((hp, index) => {
        if (hp === true) {
          ultimoIndexComTrue = index;
        }
      });

      playerHP[ultimoIndexComTrue] = false;

      setPlayerHP(playerHP);

      if (!playerHP.includes(true)) {
        // alert("You lose!");
        alert("Restarting the game...");
        window.location.reload();
      }
    }

    setFirstNumber(String(randomNumber()));
    setSecondNumber(String(randomNumber()));

    inputElement.value = "";
  };

  return (
    <>
      <div className="input-container">
        <input id={id} type="text" onBlur={submit} />
      </div>
    </>
  );
};

export default Input;
