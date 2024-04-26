"use client";

import Link from "next/link";
import "./button.css";

interface ButtonProps {
  color: "red-button" | "blue-button";
  size: "small-button" | "medium-button" | "large-button";
  href: string;
}

const Button = ({ color, size, href }: ButtonProps) => {
  return (
    <>
      <Link href={href}>
        <div id={color} className={size}></div>
      </Link>
    </>
  );
};

export default Button;
