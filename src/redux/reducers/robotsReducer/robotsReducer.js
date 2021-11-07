import actionTypes from "../../actions/actionTypes";

const robotsReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.loadRobotById:
      newRobots = [action.robot];
      break;
    default:
      newRobots = robots;
  }
  return newRobots;
};

export default robotsReducer;
