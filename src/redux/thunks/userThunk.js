import axios from "axios";
import { userLoginAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl + "users/login", user);
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem("toke", token);
      const user = jwtDecode(token);
      dispatch(userLoginAction(user));
    }
  } catch {
    const error = new Error("Error en registro");
    return error;
  }
};
