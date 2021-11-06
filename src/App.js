import { useEffect } from "react";
import "./App.css";
import RobotsList from "./components/RobotsList";
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
          <RobotsList />
        </main>
      </div>
    </>
  );
}

export default App;
