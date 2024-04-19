"use client";

import "./button.css";

interface ButtonProps {
  color: "red-button" | "blue-button";
  size: "small-button" | "medium-button" | "large-button";
}

const Button = ({ color, size }: ButtonProps) => {
  const handleButtonClick = () => {
    alert(color);
  };

  return (
    <>
      <div id={color} className={size} onClick={handleButtonClick}></div>
    </>
  );
};

export default Button;
