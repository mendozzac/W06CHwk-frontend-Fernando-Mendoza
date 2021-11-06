import { useEffect } from "react";
import "./App.css";
import Robot from "./components/Robot";
import useRobots from "./hook/useRobots";

function App(robots) {
  const { loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <div className="container">
        <header>
          <h1>Robotitos chachis</h1>
        </header>
        <main>
          <div className="App">
            {robots.map(({ robot }) => (
              <li key="">
                <Robot />
              </li>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
