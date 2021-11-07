import { loadRobotsAction } from "../../actions/actionCreator";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action", () => {
    test("Then it should return a new robots list", () => {
      const initialList = [];
      const robotsList = [
        {
          name: "Fredy",
          material: "plastic",
        },
        {
          name: "Artie",
          material: "metal",
        },
      ];
      const action = loadRobotsAction(robotsList);

      const newRobotsList = robotsReducer(initialList, action);

      expect(newRobotsList).toEqual(robotsList);
    });
  });
  describe("When it receives an empty robots list", () => {
    test("Then it should return the same empty list", () => {
      const initialList = [];
      const action = { type: "" };

      const newRobotsList = robotsReducer(initialList, action);

      expect(newRobotsList).toEqual(initialList);
    });
  });
  describe("When it recibes a empty initial value and a loadRobot action", () => {
    test("Then it should return a robot array with the given ID", () => {
      const initialList = [];
      const robot = [
        {
          _id: "1",
          name: "Fredy",
          image: "url",
        },
      ];
      const action = loadRobotsAction(robot);
      const newState = robotsReducer(initialList, action);
      expect(newState.length).toBeGreaterThan(0);
    });
  });
});
