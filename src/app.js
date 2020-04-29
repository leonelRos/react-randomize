import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>this is react</h1>
        <button>press</button>
        {Math.floor(Math.random() * 9)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
