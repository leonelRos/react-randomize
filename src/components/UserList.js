// here we wre gonna list the user with respective properties

import React from "react";
//connect is another property from react-redux
import { connect } from "react-redux";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      {props.users &&
        props.users.map((user) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};

// this method gets the redux store data
const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps)(UserList);
