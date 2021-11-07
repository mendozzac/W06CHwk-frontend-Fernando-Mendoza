import { useState } from "react";
import useRobot from "../../hook/useRobots";
import "./RobotForm.css";

const RobotForm = () => {
  const { createRobot } = useRobot();

  const initialData = {
    name: "",
    image: "",
    features: {
      speed: "",
      stamina: "",
      date: "",
    },
  };

  const [robot, setRobot] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (
      robot.name !== "" &&
      robot.features.speed !== "" &&
      robot.features.stamina !== "" &&
      robot.features.date !== ""
    ) {
      setIsDisabled(false);
    }
  };

  const changeData = (event) => {
    setRobot({
      ...robot,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const changeDataFeatures = (event) => {
    event.preventDefault();
    setRobot({
      ...robot,
      features: { ...robot.features, [event.target.id]: event.target.value },
    });
  };

  const resetForm = () => {
    setRobot(initialData);
    setIsDisabled(true);
  };

  const onCreateRobot = (event) => {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    const newRobot = {
      name: robot.name,
      image: robot.image
        ? robot.image
        : "https://comprarpegatinas.com/images/stories/virtuemart/product/pegatinas/robot_6.png",
      features: {
        speed: robot.features.speed,
        stamina: robot.features.stamina,
        date: robot.features.date,
      },
    };
    createRobot(newRobot, apiUrl);

    resetForm();
  };

  return (
    <div className="form-create-box">
      <form
        className="form-create"
        autoComplete="off"
        noValidate
        onSubmit={onCreateRobot}
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={robot.name}
          placeholder="Ponle un nombre wapo"
          onChange={changeData}
          required
        />
        <label htmlFor="image">Foto</label>
        <input
          type="url"
          id="image"
          value={robot.image}
          placeholder="Aquí la url de la fotito"
          onChange={changeData}
        />
        <label htmlFor="speed">Velocidad</label>
        <input
          type="text"
          id="speed"
          value={robot.features.speed}
          placeholder="Lo que corre"
          onChange={changeDataFeatures}
          required
        />
        <label htmlFor="stamina">Resistencia</label>
        <input
          type="text"
          id="stamina"
          value={robot.features.stamina}
          placeholder="Lo que aguanta"
          onChange={changeDataFeatures}
          required
        />
        <label htmlFor="date">Fecha de creación</label>
        <input
          type="text"
          id="date"
          value={robot.features.date}
          placeholder="Cuando se hizo"
          onChange={changeDataFeatures}
          required
        />
        <button disabled={isDisabled}>Crear</button>
      </form>
    </div>
  );
};

export default RobotForm;
