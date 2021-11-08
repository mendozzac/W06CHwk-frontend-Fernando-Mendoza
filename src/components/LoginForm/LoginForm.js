import { useState } from "react";

const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };
  // const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setUserData(initialUser); // navigate("/logout");
  };

  return (
    <form autoComplete="off" noValidate onSubmit={onSubmit}>
      <input
        type="text"
        id="username"
        value={userData.usernaem}
        onChange={changeUserData}
      />
      <input
        type="text"
        id="password"
        value={userData.usernaem}
        onChange={changeUserData}
      />
      <button>Login</button>
    </form>
  );
};
export default LoginForm;
