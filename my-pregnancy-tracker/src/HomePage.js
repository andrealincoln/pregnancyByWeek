import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ReactComponent as StorkIcon } from './assets/StorkBlue.svg'; // Adjust the path as necessary

function HomePage() {
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/week/${dueDate}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eafcf5' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ textAlign: 'center' }}>
          <h1>Welcome to <span style={{ fontWeight: 'bold' }}>My Pregnancy Tracker</span>!</h1>
          <p>This tool will let you make a link to a page which will track your pregnancy week by week!</p>
          <p>Share the link with a partner, friends, family, or just yourself!</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <TextField
              id="date"
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
                <Button variant="contained" type="submit" endIcon={<StorkIcon style={{ width: '30px', height: '30px' }} />} style={{ marginTop: '20px' }}>
                  Start tracking
                </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
