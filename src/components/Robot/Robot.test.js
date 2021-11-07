import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receives a robot", () => {
    test("Then it should render the robot", () => {
      const robot = {
        name: "Fredy",
        image: "plastic",
        features: {
          speed: 5,
          stamin: 6,
        },
      };

      render(<Robot robot={robot} />);
      const newRobot = screen.getByText("Fredy");

      expect(newRobot).toBeInTheDocument();
    });
  });
});
