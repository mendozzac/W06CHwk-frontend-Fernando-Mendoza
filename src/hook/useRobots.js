import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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

  return {
    robots,
    loadRobots,
    loadRobotById,
  };
};

export default useRobots;
