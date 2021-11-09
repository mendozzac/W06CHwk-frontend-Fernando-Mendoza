import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useUser from "../../hook/useUser";
import "./LoginForm.css";

const LoginForm = () => {
  const initialUser = {
    name: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/robots");
    }
  });

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
  };

  return (
    <form className="form" autoComplete="off" noValidate onSubmit={onSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        value={userData.name}
        onChange={changeUserData}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="text"
        id="password"
        value={userData.password}
        onChange={changeUserData}
      />
      <button className="button">Login</button>
    </form>
  );
};
export default LoginForm;
