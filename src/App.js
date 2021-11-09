import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotsPage from "./pages/RobotsPage";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <header>
            <h1>Robotitos chachis</h1>
          </header>
          <main>
            <Routes>
              <Route element={<LoginForm />} path="/users" />
              <Route element={<RobotsPage />} path="/robots" exact />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
