import React from "react";
import "./styles.css";
const App = () => {
  const enter = (event, color) => 
  {
    event.target.style.backgroundColor = color;
  };

  const leave = (event, color) =>
  {
    event.target.style.backgroundColor = color;
  }
  return (
    <div className="mainDiv">
        <h1>Touch the box</h1>
<div className="divBox">
          
          <div
            className="box"
            id="redBox"
            onMouseEnter={(e) => enter(e, "yellow")}
            onMouseLeave={(e) => leave(e, 'red')}
          ></div>
          <div 
            className="box" 
            id="blueBox"
            onMouseEnter={(e) => enter(e, 'green')}
            onMouseLeave={(e) => leave(e, 'blue')}
            ></div>
        </div>
    </div>
    
  );
};

export default App;
