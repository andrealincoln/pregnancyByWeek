
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WeekByWeekPage from './WeekByWeekPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/week/:dueDate" element={<WeekByWeekPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
