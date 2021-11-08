import { useEffect } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotForm from "./components/RobotForm/RobotForm";
import RobotsList from "./components/RobotList/RobotsList";
import useRobots from "./hook/useRobots";

function App() {
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
          <LoginForm />
          <RobotForm />
          <RobotsList />
        </main>
      </div>
    </>
  );
}

export default App;
