import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import WeekByWeekPage from "./WeekByWeekPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/week/:dueDate" element={<WeekByWeekPage />} />
      </Routes>
    </Router>
  );
}

export default App;
