import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import WeekByWeekPage from "./WeekByWeekPage";
import Topbar from "./Topbar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/week/:dueDate" element={<WeekByWeekPage />} />
      </Routes>
    </Router>
  );
}

export default App;
