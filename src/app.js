import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import store from "./store/store";
import addUsers from "./actions/user";

class App extends React.Component {
  componentDidMount() {
    //we are getting the json data from our local host
    axios.get("http://localhost:3000/user").then((response) => {
      console.log(response.data);
      //we are dispatching addusers action and send it through then function
      store.dispatch(addUsers(response.data.results));
    });
  }
  render() {
    return <React.Fragment>Hello React</React.Fragment>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
