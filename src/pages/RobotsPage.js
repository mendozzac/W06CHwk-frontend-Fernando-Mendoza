import { useEffect } from "react";
import RobotForm from "../components/RobotForm/RobotForm";
import RobotsList from "../components/RobotList/RobotsList";
import useRobots from "../hook/useRobots";

const RobotsPage = () => {
  const { loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return (
    <>
      <RobotForm />
      <RobotsList />
    </>
  );
};

export default RobotsPage;
