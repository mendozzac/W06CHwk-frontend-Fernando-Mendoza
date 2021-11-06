import useRobots from "../hook/useRobots";
import Robot from "./Robot";

const RobotsList = () => {
  const { robots } = useRobots();
  return (
    <div className="robots-list">
      {robots.map((robot) => (
        <Robot robot={robot} key={robot._id} />
      ))}
    </div>
  );
};

export default RobotsList;
