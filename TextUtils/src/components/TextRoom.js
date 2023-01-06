import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

// const nySpace = "/\\s+/";
const TextRoom = (props) => {
  const [text, settext] = useState("Enter Text here");
  let [FindWord, setFind] = useState("");
  let [ReplaceWord, setReplace] = useState("");

  useEffect(() => {
    settext(text.replaceAll(FindWord, ReplaceWord));
  }, [ReplaceWord]);

  const onChangeHandle = (event) => {
    console.log("on change clciked");
    settext(event.target.value);
  };

  const clickUpHandle = () => {
    console.log("button clicked");
    settext(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const clickLoHandle = () => {
    console.log("button clicked");
    settext(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const clickClearHandle = () => {
    settext("");
    props.showAlert("Text Cleared", "success");
  };

  const clickToFindAndReplace = () => {
    setFind(prompt("Enter the word to be found"));
    setReplace(prompt("Enter the word to be Replace"));

    //callback();
  };

  const handleCopy = () => {
    let textBox = document.getElementById("textbox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    props.showAlert("Text Copied", "success");
  };

  const handlePDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("a4.pdf");
    props.showAlert("PDF Downloaded", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  // function callme() {
  //   console.log(text);
  // }
  // const clickToFindAndReplace = () => {
  //   return new Promise(function (resolve, reject) {
  //     setFind(prompt("Enter the word to be found"));
  //     setReplace(prompt("Enter the word to be Replace"));
  //   });
  // };

  // function TextUpdateAfterReplace() {
  //   settext(text.replaceAll(FindWord, ReplaceWord));
  // }

  // const ctfr = (option, callback) => {
  //   setFind(prompt("Enter the word to be found"));
  //   setReplace(prompt("Enter the word to be Replace"));
  //   clickToFindAndReplace.then(TextUpdateAfterReplace);
  // };
  return (
    <>
      <div className="container my-2">
        <div className="mb-3">
          <h2 className="my-4">{props.heading}</h2>
          <textarea
            id="textbox"
            className="form-control"
            rows="7"
            value={text}
            onChange={onChangeHandle}
            style={{
              background: props.mode == "light" ? "white" : "grey",
              color: props.mode == "light" ? "black" : "white",
            }}
          ></textarea>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={clickUpHandle}
            disabled={text.length == 0}
          >
            Click for Uppercase
          </button>

          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={clickLoHandle}
            disabled={text.length == 0}
          >
            Click for LowerCase
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={clickClearHandle}
            disabled={text.length == 0}
          >
            Click to Clear
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleCopy}
            disabled={text.length == 0}
          >
            Click to Copy
          </button>

          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handlePDF}
            disabled={text.length == 0}
          >
            Get PDF
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleExtraSpace}
            disabled={text.length == 0}
          >
            Remove extra space
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={clickToFindAndReplace}
            disabled={text.length == 0}
          >
            Click To Find and Replace
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text summary</h2>
        <p>
          {text.trim().length > 0
            ? text.trim().split(/\s+/).length
            : text.trim().length}{" "}
          words {text.replaceAll(" ", "").length} characters
        </p>
        <p>
          Time taken to read{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
};

export default TextRoom;
