import "./roundedShape.css";

interface RoundedShapeProps {
  color: "blue-shape" | "green-shape";
  size: "small-shape" | "medium-shape" | "large-shape";
}

const RoundedShape = ({ color, size }: RoundedShapeProps) => {
  return <div id={color} className={size}></div>;
};

export default RoundedShape;
