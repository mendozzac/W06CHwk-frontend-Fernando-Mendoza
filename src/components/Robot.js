const Robot = ({ robot }) => {
  return (
    <>
      <li>
        <div className="robot-box">
          <img src={robot.image} width="200px" height="200px" alt="robot"></img>
          <p>{robot.name}</p>
          <p>{robot.speed}</p>
          <p>{robot.stamina}</p>
        </div>
      </li>
    </>
  );
};

export default Robot;
