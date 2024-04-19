import "./bmo.css";

import Joystick from "../joystick/joystick";
import Screen from "../screen/screen";
import Button from "../button/button";
import RoundedShape from "../roundedShape/roundedShape";

const BMO = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div id="bmo-body">
        <Screen>{children}</Screen>

        <div id="top-controls">
          <RoundedShape color="green-shape" size="large-shape"/>
          <Button color="blue-button" size="small-button" />
        </div>

        <div id="mid-controls">
          <Joystick />
          <Button color="red-button" size="large-button" />
        </div>
      </div>
    </>
  );
};

export default BMO;
