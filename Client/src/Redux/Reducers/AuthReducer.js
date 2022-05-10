const initState = { user: null, loading: true, isAuth: false };
import { SIGN_IN, USER_FAIL } from "../Type";
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        isAuth: true,
      };
    case USER_FAIL:
      localStorage.clear();
      return { ...state, user: null, isAuth: false};
    default:
      return state;
  }
};
export default authReducer;
