import React, { useState, useEffect } from "react";

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
  };

  const clickLoHandle = () => {
    console.log("button clicked");
    settext(text.toLowerCase());
  };

  const clickClearHandle = () => {
    settext("");
  };

  const clickToFindAndReplace = () => {
    setFind(prompt("Enter the word to be found"));
    setReplace(prompt("Enter the word to be Replace"));

    //callback();
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
      <div className="container">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            rows="7"
            value={text}
            onChange={onChangeHandle}
          ></textarea>
          <button className="btn btn-primary mt-2 mx-1" onClick={clickUpHandle}>
            Click for Uppercase
          </button>

          <button className="btn btn-primary mt-2 mx-1" onClick={clickLoHandle}>
            Click for LowerCase
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={clickClearHandle}
          >
            Click to Clear
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={clickToFindAndReplace}
          >
            Click To Find and Replace
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text summary</h2>
        <p>
          {text.trim().length > 0
            ? text.trim().split(" ").length
            : text.trim().length}{" "}
          words {text.replaceAll(" ", "").length} characters
        </p>
        <p>Time taken to read {0.008 * text.trim().split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextRoom;
