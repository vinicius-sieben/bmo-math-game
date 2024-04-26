import "./number.css";

interface NumberProps {
  number: string;
}

const Number = ({ number }: NumberProps) => {
  return <p className="number">{number}</p>;
};

export default Number;
