import {
  POST_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
} from "../constants/userConstants";

const initialState = {
  isLoading: false,
  users: [],
  message: "",
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: "Successfully submitted your request. We will inform you soon",
      };
    case POST_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
