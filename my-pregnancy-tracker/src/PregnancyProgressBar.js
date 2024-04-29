import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

const TrimesterLabel = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  marginTop: '35px', // Adjust this value to position the labels correctly below the bar
}));

const PregnancyProgressBar = ({ value }) => {
  const trimesterMarks = {
    first: 33.3,
    second: 66.6,
    third: 100,
  };

  const getBarColor = (value) => {
    if (value <= trimesterMarks.first) return '#66bb6a'; // Green for first trimester
    if (value <= trimesterMarks.second) return '#a73bff'; // Yellow for second trimester
    return '#6db73c'; // Red for third trimester
  };

  return (
    <Box position="relative" display="flex" alignItems="center">
      <StyledLinearProgress variant="determinate" value={value} sx={{ width: '100%' }} style={{ backgroundColor: getBarColor(value) }} />
      <TrimesterLabel sx={{ left: '0%' }}>1st</TrimesterLabel>
      <TrimesterLabel sx={{ left: '33.3%' }}>2nd</TrimesterLabel>
      <TrimesterLabel sx={{ left: '66.6%' }}>3rd</TrimesterLabel>
      <TrimesterLabel sx={{ left: '100%', transform: 'translateX(-100%)' }}>Birth</TrimesterLabel>
    </Box>
  );
};

export default PregnancyProgressBar;
