import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((user) => user);
  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(loginUserThunk(user));
  };
  return {
    user,
    loginUser,
  };
};

export default useUser;
