import { darken } from "@material-ui/core";
import axios from "axios";
import { SIGN_IN, SIGN_UP, USER_FAIL, LOG_OUT } from "./../Type";

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:10000/auth/sign-in",
      user
    );
    dispatch({ type: SIGN_IN, payload: response.data });
    if (response.data.user.role === 1) {
      navigate("/admin-dashbaord");
    } else {
      navigate("/");
    }
  } catch (error) {
    dispatch({ type: USER_FAIL });
    error.response.data.errors.map((err) => alert(err.msg));
  }
};
export const logOut = (navigate) => (dispatch) => {
  dispatch({ type: LOG_OUT });
  navigate("/");
};

