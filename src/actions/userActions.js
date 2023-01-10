import {
  POST_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
} from "../constants/userConstants";

export const userRequest = () => async (dispatch) => {
  dispatch({
    type: POST_USER_REQUEST,
  });
};
export const userSuccess = (users) => async (dispatch) => {
  dispatch({
    type: POST_USER_SUCCESS,
    payload: users,
  });
};
export const userError = (error) => async (dispatch) => {
  dispatch({
    type: POST_USER_ERROR,
    payload: error,
  });
};
