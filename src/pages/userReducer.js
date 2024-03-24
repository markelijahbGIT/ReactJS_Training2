const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return action.payload;

    case "ADD_USER":
      return [...state, action.payload];

    case "EDIT_USER":
      const newState = [...state];
      const index = newState.findIndex((item) => item.id === action.payload.id);
      newState[index] = action.payload;
      return newState;

    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload.id);

    default:
      return state;
  }
};