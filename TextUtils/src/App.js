import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextRoom from "./components/TextRoom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alertMsg, setAlertMsg] = useState(null);

  const showAlert = (message, result) => {
    setAlertMsg({
      msg: message,
      res: result,
    });
    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  };

  let myInterval = null;
  const toggleMode = (color) => {
    if (Mode === "light") {
      setMode("dark");

      // let bgColor = document.getElementById("colorpicker");
      // bgColor.click();

      // myInterval = setInterval(() => {
      //   document.body.style.backgroundColor = bgColor.value;
      // }, 200);

      document.body.style.backgroundColor = color;
      document.body.style.color = "White";
      showAlert("Dark Mode Enabled", "success");
    } else {
      // clearInterval(myInterval);
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "Black";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutInfo="About Us"
        mode={Mode}
        toggleFunc={toggleMode}
      />
      <Alert alertM={alertMsg} />
      <TextRoom
        heading="Enter the text to analyse here"
        mode={Mode}
        showAlert={showAlert}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
