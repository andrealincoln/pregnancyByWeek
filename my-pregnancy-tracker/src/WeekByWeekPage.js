import React from 'react';
import { useParams } from 'react-router-dom';
import {Typography, Card, CardContent, Button, Box, Link} from '@mui/material';
import weekData from './assets/WeekDataJson.json';
import fruitData from './assets/WeekFruits.json'

function WeekByWeekPage() {
  const { dueDate } = useParams();
  const daysPregnant = daysPregFromDueDate(dueDate);
  const currentWeek = Math.floor(daysPregnant / 7);
  const extraDays = daysPregnant- currentWeek*7;


  return (
    <Card sx={{  margin: 'auto', marginTop: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pregnancy Week {currentWeek}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You are {currentWeek} weeks and {extraDays} days pregnant.
        </Typography>
        <PregnancyInfoCard daysPregnant={daysPregnant} />
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#831529', color: '#ffffff' }}
          href={`https://www.whattoexpect.com/pregnancy/week-by-week/week-${currentWeek}.aspx`}
          target="_blank"
          fullWidth
        >
          Learn more about week {currentWeek} from What to Expect
        </Button>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#c46327', color: '#ffffff' }}
          href={`https://www.babylist.com/hello-baby/${currentWeek}-weeks-pregnant`}
          target="_blank"
          fullWidth
        >
          Learn more about week {currentWeek} from Baby List
        </Button>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#937c07', color: '#ffffff' }}
          href={`https://www.babycenter.com/pregnancy/week-by-week/${currentWeek}-weeks-pregnant`}
          target="_blank"
          fullWidth
        >
          Learn more about week {currentWeek} from Baby Center
        </Button>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#187303', color: '#ffffff' }}
          href={`https://www.thebump.com/pregnancy-week-by-week/${currentWeek}-weeks-pregnant`}
          target="_blank"
          fullWidth
        >
          Learn more about week {currentWeek} from The Bump
        </Button>
      </Box>


      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#032373', color: '#ffffff' }}
          href={`https://www.pampers.com/en-us/pregnancy/pregnancy-calendar/${currentWeek}-weeks-pregnant`}
          target="_blank"
          fullWidth
        >
          Learn more about week {currentWeek} from Pampers
        </Button>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#3d0373', color: '#ffffff' }}
          href={`https://americanpregnancy.org/healthy-pregnancy/week-by-week/${currentWeek}-weeks-pregnant/`}
          target="_blank"
          fullWidth
        >
          Learn more about week {currentWeek} from The American Pregnancy Association
        </Button>
      </Box>
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
  const weekInfo = weekData[weeksPregnant];
  const fruitName = fruitData[weeksPregnant];

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
        {fruitName ?
            <Typography gutterBottom variant="h6" component="div">
              Your fetus is the size of a {fruitName}
            </Typography>
            : null}
        {weekInfo ?
            <>
            <Typography variant="body1" color="text.secondary">
              Your fetus is {weekInfo["lengthInches"]}in long and weighs {weekInfo["weightLb"]}lbs.
              In metric your fetus is {weekInfo["lengthCm"]}cm long and weighs {weekInfo["massG"]}g.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              (
              <Link href="https://babyyourbaby.org/pregnancy/during-pregnancy/fetal-chart/" target="_blank" rel="noopener noreferrer">
                 Data source is here
              </Link>)
            </Typography>
            </>
            : null}
        <Typography gutterBottom variant="h5" component="div">
          You are in the {trimester} Trimester
        </Typography>
        <Typography>
          You have an estimated {daysToBirth} days until birth ({weeksToBirth} weeks).
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

export default WeekByWeekPage;
