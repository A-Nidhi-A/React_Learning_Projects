import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextRoom from "./components/TextRoom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutInfo="About Us" />

      <TextRoom heading="Enter the text to analyse here" />
      {/* <About /> */}
    </>
  );
}

export default App;
