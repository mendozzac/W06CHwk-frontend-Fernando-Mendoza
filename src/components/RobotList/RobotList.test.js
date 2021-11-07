import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import RobotsList from "./RobotsList";

describe("Given a RobotList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );

      const robotList = screen.getByRole("list");

      expect(robotList).toBeInTheDocument();
    });
  });
});
