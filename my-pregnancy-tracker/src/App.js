import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import WeekByWeekPage from "./WeekByWeekPage";
import Topbar from "./Topbar";

function App() {
  return (
    <Router>
        <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/week/:dueDate/:name?" element={<WeekByWeekPage />} />
      </Routes>
    </Router>
  );
}

export default App;
