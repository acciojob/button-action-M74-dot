import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [showBtn, setShowBtn] = useState(false);
  function handleShow(){
    setShowBtn(!showBtn)
  }
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para" className={(showBtn? "show" : "hide")}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleShow}>{(showBtn? "Hide" : "Show")}</button>
    </div>
  );
}

export default App
