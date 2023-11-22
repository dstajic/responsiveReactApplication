import { useState } from "react";
function IMGBUTTON() {
  let yellow = "#988F2A";
  const [bgColor, setBgColor] = useState(yellow);
  const changeColor1 = () => {
    let green = "#04AA6D";
    setBgColor(green);
  };
  const changeColor2 = () => {
    let blue = "#008CBA";
    setBgColor(blue);
  };
  const changeColor3 = () => {
    let red = "#f44336";
    setBgColor(red);
  };
  return (
    <>
      <div className="imgButton" style={{ background: bgColor }}>
        <div className="Left">
          <img id="img1" src="images/colorSquare.png"></img>
        </div>

        <div className="buttons">
          <button className="button button1" onClick={changeColor1}>
            Green
          </button>
          <br />
          <button className="button button2" onClick={changeColor2}>
            Blue
          </button>
          <br />
          <button className="button button3" onClick={changeColor3}>
            Red
          </button>
        </div>
      </div>
    </>
  );
}
export default IMGBUTTON;
