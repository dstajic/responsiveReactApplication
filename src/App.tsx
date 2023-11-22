import "./App.css";
import FOOTER from "./components/FOOTER";
import IMGBUTTON from "./components/IMGBUTTON";
import MAINTEXT from "./components/MAINTEXT";
import NAVBAR from "./components/NAVBAR";
import VIDEOPLAYER from "./components/VIDEOPLAYER";

function App() {
  return (
    <>
      <NAVBAR></NAVBAR>
      <MAINTEXT></MAINTEXT>
      <VIDEOPLAYER></VIDEOPLAYER>
      <IMGBUTTON></IMGBUTTON>
      <FOOTER></FOOTER>
    </>
  );
}

export default App;
