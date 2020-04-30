const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      return [...state, ...action.users];
  }
};
export default userReducer;
