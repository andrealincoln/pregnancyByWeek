import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the WeekByWeekPage with the dueDate in the URL
    navigate(`/week/${dueDate}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My Pregnancy Tracker!</h1>
      <p>This tool helps you track your pregnancy week by week.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your due date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Start tracking</button>
      </form>
    </div>
  );
}

export default HomePage;
