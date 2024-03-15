import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ReactComponent as StorkIcon } from './assets/StorkBlue.svg';
import './HomePage.css';

function HomePage() {
  const [name, setName] = useState(''); // Add state for the name
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // If a name is provided, include it in the navigation path
    const path = name ? `/week/${dueDate}/${name}` : `/week/${dueDate}`;
    navigate(path);
  };

  const handleNameChange = (event) => {
    const asciiOnly = event.target.value.replace(/[^ -~]+/g, ""); // Regex to keep ASCII characters only
    if (asciiOnly.length <= 40) {
      setName(asciiOnly);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eafcf5' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ textAlign: 'center' }}>
          <h1>Welcome to <span style={{ fontWeight: 'bold' }}>My Pregnancy Tracker</span>!</h1>
          <p>This page will let you make a static link to a page which will track what week you are in your pregnancy!</p>
          <p>The pages will have a tiny bit of information and links to week-by-week pregnancy resources on other sites.</p>
          <p>Share the link with a partner, friends, family, or just yourself! </p>
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
            <TextField
              id="name"
              label="Your Name (optional)"
              type="text"
              value={name}
              onChange={handleNameChange}
              inputProps={{ maxLength: 40 }} // This limits the length of input
              sx={{ width: 220 }}
              helperText={`${name.length}/40`} // Shows the character count
              variant="outlined"
            />
                <Button variant="contained" type="submit" className="customButtonColor" endIcon={<StorkIcon style={{ width: '30px', height: '30px' }} />} style={{ marginTop: '20px' }}>
                  Start tracking
                </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
