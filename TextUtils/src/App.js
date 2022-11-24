import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextRoom from "./components/TextRoom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  const setLight = () => {
    setMode("light");
  };

  const toggleMode = (color) => {
    if (Mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = color;
      document.body.style.color = "White";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "Black";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <div>
      <Navbar
        title="TextUtils"
        aboutInfo="About Us"
        mode={Mode}
        toggleFunc={toggleMode}
        setLightBag={setLight}
      />

      <Alert alertM={alertMsg} />

      <TextRoom
        heading="Enter the text to analyse here"
        mode={Mode}
        showAlert={showAlert}
      />
    </div>
    // <BrowserRouter>
    //   <Navbar
    //     title="TextUtils"
    //     aboutInfo="About Us"
    //     mode={Mode}
    //     toggleFunc={toggleMode}
    //     setLightBag={setLight}
    //   />
    //   <Alert alertM={alertMsg} />
    //   <Routes>
    //     <Route
    //       exact
    //       path="/"
    //       element={
    //         <TextRoom
    //           heading="Enter the text to analyse here"
    //           mode={Mode}
    //           showAlert={showAlert}
    //         />
    //       }
    //     />
    //     <Route exact path="/About" element={<About />} />
    //   </Routes>
    // </BrowserRouter>

    // <Router>
    //   <div>
    //     <Navbar
    //       title="TextUtils"
    //       aboutInfo="About Us"
    //       mode={Mode}
    //       toggleFunc={toggleMode}
    //       setLightBag={setLight}
    //     />
    //     <Alert alertM={alertMsg} />

    //     <Switch>
    //       <Route exact path="/About">
    //         <About />
    //       </Route>
    //       <Route exact path="/">
    //         <TextRoom
    //           heading="Enter the text to analyse here"
    //           mode={Mode}
    //           showAlert={showAlert}
    //         />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
