import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreator";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data } = await axios.get(apiUrl);
    console.log(data);
    dispatch(loadRobotsAction(data));
  };
};
