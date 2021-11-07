import useRobots from "../../hook/useRobots";
import Robot from "../Robot/Robot";

const RobotsList = () => {
  const { robots } = useRobots();
  return (
    <ul className="robots-list">
      {robots.map((robot) => (
        <Robot robot={robot} key={robot._id} />
      ))}
    </ul>
  );
};

export default RobotsList;
