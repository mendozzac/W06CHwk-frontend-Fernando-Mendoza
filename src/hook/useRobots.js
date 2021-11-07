import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  loadRobotByIdThunk,
  loadRobotsThunk,
} from "../redux/thunks/robotThunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const loadRobotById = useCallback(
    (id) => {
      dispatch(loadRobotByIdThunk(id));
    },
    [dispatch]
  );

  const createRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };

  return {
    robots,
    loadRobots,
    createRobot,
    loadRobotById,
  };
};

export default useRobots;
