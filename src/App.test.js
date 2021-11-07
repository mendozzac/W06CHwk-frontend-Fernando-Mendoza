import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/store/index";
import { server } from "./mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given an App component", () => {
  describe("When it is renderer", () => {
    test("Then it should show the robots loaded", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const robot = await screen.findByText("Fredy");
      await waitFor(() => {
        expect(robot).toBeInTheDocument();
      });
    });
  });
});
