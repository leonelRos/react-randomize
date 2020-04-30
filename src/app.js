import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    //we are getting the json data from our local host
    axios.get("http://localhost:3000/user").then((response) => {
      console.log(response.data);
    });
  }
  render() {
    return <React.Fragment>Hello React</React.Fragment>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
