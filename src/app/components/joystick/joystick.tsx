import Image from "next/image";
import "./joystick.css";
import Arrow from "../arrow/arrow";

const Joystick = () => {
  return (
    <>
      <div id="joystick">
        {/* Joystick shape */}
        <Image
          src={"/joystick.svg"}
          alt="Yellow joystick"
          width={150}
          height={150}
        />

        {/* Arrow keys */}
        <Arrow id="up" src="/arrow-up.svg" className="arrow" />
        <Arrow id="right" src="/arrow-right.svg" className="arrow" />
        <Arrow id="down" src="/arrow-down.svg" className="arrow" />
        <Arrow id="left" src="/arrow-left.svg" className="arrow" />
      </div>
    </>
  );
};

export default Joystick;
