import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import store from "./store/store";
import { addUsers } from "./actions/user";
import Header from "./components/Header";
import { Provider } from "react-redux";
import UserList from "./components/UserList";
import "./css/styles.css";

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
    return (
      <div>
        Hello React
        <Header />
        <UserList />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
//changing the react dom method to provider because of redux

ReactDOM.render(
  //we are passing the store prop to the provider component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
