import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Button } from '@mui/material';

function WeekByWeekPage() {
  const { dueDate } = useParams();
  const currentWeek = calculatePregnancyWeekFromDueDate(dueDate);
  const daysPregnant = daysPregFromDueDate(dueDate);

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pregnancy Week {currentWeek}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You are currently in week {currentWeek} of your pregnancy.
        </Typography>
        <PregnancyInfoCard daysPregnant={daysPregnant} />
        <Button
          variant="contained"
          color="primary"
          href={`https://www.whattoexpect.com/pregnancy/week-by-week/week-${currentWeek}.aspx`}
          target="_blank"
          sx={{marginTop: 2}}
        >
          Learn more about week {currentWeek}
        </Button>
      </CardContent>
    </Card>
  );
}

function PregnancyInfoCard({ daysPregnant }) {
  const weeksPregnant = Math.floor(daysPregnant / 7);
  const daysToBirth = 40*7-daysPregnant;
  const weeksToBirth = Math.floor(daysToBirth / 7);
  let trimester;
  let additionalInfo;

  if (weeksPregnant >= 4 && weeksPregnant <= 12) {
    trimester = "First";
    additionalInfo = "This is a crucial time for the development of the baby's vital organs.";
  } else if (weeksPregnant >= 13 && weeksPregnant <= 27) {
    trimester = "Second";
    additionalInfo = "The risk of miscarriage drops significantly. This is often considered the easiest trimester.";
  } else if (weeksPregnant >= 28 && weeksPregnant <= 42) {
    trimester = "Third";
    additionalInfo = "The baby is growing larger and getting ready for birth. You might start to feel more discomfort.";
  } else {
    trimester = "Out of typical range";
    additionalInfo = "The number of days entered does not correspond with typical pregnancy duration.";
  }

  return (
    <Card sx={{ minWidth: 275, margin: 'auto', marginTop: 5, padding: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          You are in the {trimester} Trimester
        </Typography>
        <Typography>
          You have an estimated {daysToBirth} days until birth. Which is {weeksToBirth} weeks.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {additionalInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}

function daysPregFromDueDate(dueDate) {
  const due = new Date(dueDate);
  const today = new Date();
  const diff = due.getTime() - today.getTime();
  const days = diff / (1000 * 3600 * 24);

  return Math.floor(40*7 - days); // Assuming 40 weeks total, adjust as necessary
}

function calculatePregnancyWeekFromDueDate(dueDate) {
  const due = new Date(dueDate);
  const today = new Date();
  const diff = due.getTime() - today.getTime();
  const days = diff / (1000 * 3600 * 24);
  const weeks = days / 7;

  return Math.floor(40 - weeks); // Assuming 40 weeks total, adjust as necessary
}

export default WeekByWeekPage;
