import "./screen.css";

const Screen = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div id="screen">{children}</div>
    </>
  );
};
export default Screen;
