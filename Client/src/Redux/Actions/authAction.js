import axios from "axios";
import { SIGN_IN ,SIGN_UP,USER_FAIL} from './../Type';
export const login=()=>{

}
export const signIn = (user, navigate) => async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:9000/auth/login", user);
      dispatch({ type: SIGN_IN, payload: response.data });
  
      if (response.data.role===1) {
        navigate("/admin-dashbaord");
      } else {
        navigate("/");
      }
    } catch (error) {
      dispatch({ type: USER_FAIL });
      error.response.data.errors.map((err) => alert(err.msg));
    }
  };