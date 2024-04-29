import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {Typography, Card, CardContent, Button, Box, Link, Grid} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PregnancyProgressBar from './PregnancyProgressBar';


import weekData from './assets/WeekDataJson.json';
import fruitData from './assets/WeekFruits.json';
import defaultImage from './FruitImageAssets/defaultImage.jpg';


function WeekImage({ weekNumber }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    // Dynamically import the image based on the week number
    import(`./FruitImageAssets/week${weekNumber}.jpg`)
      .then(image => {
        setImgSrc(image.default);
      })
      .catch(error => {
        console.log(`No image found for week ${weekNumber}:`, error);
        // Handle the case where the image does not exist. For example, set a default image.
        setImgSrc(defaultImage ); // Replace with actual path to a default image
      });
  }, [weekNumber]);

  return imgSrc ? <img src={imgSrc} style={{ height: '100px' , borderRadius: '50px'}} alt={`Week ${weekNumber}`} /> : null;
}

function HealthLinksNarative() {
  return(
    <Accordion sx={{  margin: 'auto', marginTop: 1, backgroundColor: "#f7fdf9"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component="div">
          Andrea's Narative Summary
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          I aim to cover what I learned about pregnancy that wasn't immediately obvious to me.
        </Typography>
        <Typography>
          Certain drugs and foods that are typically harmless can pose risks during pregnancy, such as alcohol.
          The risk with food (e.g. deli meats, soft cheeses) often relates to infection, which can also endanger the
          fetus. Drugs generally considered toxic are
          likely to be harmful during pregnancy. However, there are many medications whose risks may seem
          surprising or random; for example, it is recommended that pregnant women avoid taking ibuprofen.
          I recommend explicitly consulting your doctor and/or researching any prescription or over-the-counter
          medication or supplement before use.
        </Typography>
        <Typography>
          Virtually all mild to moderate exercise is safe during pregnancy, but some activities may become challenging
          as pregnancy progresses. For intense exercises that carry a higher risk of injury or require extensive
          recovery, such as boxing or marathon running, it's wise to do some research beforehand. Staying in shape not
          only provides the usual health benefits but also potentially give you more endurance for labor.
        </Typography>
        <Typography>
          Pregnancy impacts bodies in vastly different ways. To illustrate, 30% of individuals experience no morning
          sickness, while 3% suffer from severe vomiting multiple times a day, requiring special medical attention to
          manage dehydration and weight loss. Most fall somewhere in between. Pregnancy can also present various
          complications that affect approximately 5% of women. This leads to diverse experiences, ranging from those
          who find pregnancy effortless and insist it is a state of wellness, to others who endure significant
          hardships, such as frequent hospital visits, gestational diabetes, or complications that might necessitate
          bed rest. I say all of this to make horror stories less alarming while also reassuring you that not having a
          "normal pregnancy" is, in fact, very normal.
          Pregnancy often involves unique, unpredictable
          symptoms—similar to a mild illness in the first trimester and akin to carrying an overly heavy backpack in
          the last. You'll face additional restrictions, like being unable to take most pain medications. For any
          specific issues that arise, consulting with your doctor and researching can let you mitigate issues.
        </Typography>
        <Typography>
          Now, let me step onto my personal soapbox. Approximately 10% of women have hypothyroidism. Untreated or
          inadequately treated hypothyroidism is linked to adverse outcomes. While the U.S. is quite good at
          screening for hypothyroidism, considering the significance for pregnancy, I recommend asking your doctor to
          test your thyroid function if you are planning to try getting pregnant. If you have any of your own interesting
          health quirks make sure to bring them up to your doctor and read up on pregnancy with the condition.
        </Typography>
        <Typography>
          Pregnancy is, as my husband memorably put it, quite metal. Your body undergoes intense changes to accommodate
          the growth of a fetus into a baby. During this time, seemingly minor adjustments can have surprisingly
          significant impacts on the future child. Don't let this overwhelm you. We always operate under some level of
          uncertainty. Do your best, follow medical advice, and consider checking recent literature reviews for new
          and helpful insights.
        </Typography>

      </AccordionDetails>
    </Accordion>
  );
}

function HealthLinksAccordion() {
  return (
    <Accordion sx={{  margin: 'auto', marginTop: 1, backgroundColor: "#ecfaf1"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" component="div">
          General Pregnancy Health Links & Information
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <HealthLinksNarative/>
        <Typography>
          General Guides
        </Typography>
        <Typography>
          <Link href="https://www.amazon.com/What-Expect-When-Youre-Expecting/dp/0761187480" target="_blank" rel="noopener noreferrer">
            The classic What to Expect When You're Expecting book is a great general guide to stndard medical advice and
            what is normal during pregnancy.
          </Link>
        </Typography>
        <Typography>
          <Link href="https://www.amazon.com/Expecting-Better-Conventional-Pregnancy-Wrong-ebook/dp/B00AEBEQUK/" target="_blank" rel="noopener noreferrer">
            Emily Oster gives a useful delta to standard pregnancy advice. I have some (mild) complaints ask me if you
            want an
            earful.
          </Link>
        </Typography>
        <Typography>
          <Link href="https://www.astralcodexten.com/p/obscure-pregnancy-interventions-much" target="_blank" rel="noopener noreferrer">
            Scott gives his speculative pregnancy advice ("a list of the most extreme things you could do if you
            were neurotic and had no sense of proportion").
          </Link>
        </Typography>
        <Typography>
          Specific Guides
        </Typography>
        <Typography>
          <Link href="https://www.aafp.org/pubs/afp/issues/2003/0615/p2517.html" target="_blank" rel="noopener noreferrer">
            AAFP Over the counter drug list information for pregnancy 2003
          </Link>
        </Typography>
        <Typography>
          <Link href="https://www.drugs.com/pregnancy/" target="_blank" rel="noopener noreferrer">
            Drugs.com list of pregnancy links (mostly drug related)
          </Link>
        </Typography>
        <Typography>
          <Link href="https://www.cdc.gov/physicalactivity/basics/pregnancy/index.htm" target="_blank" rel="noopener noreferrer">
            CDC Pregnancy Exercise Recommendations 2018
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}


function WeekByWeekPage() {
  const { dueDate, name } = useParams();
  const daysPregnant = daysPregFromDueDate(dueDate);
  const currentWeek = Math.floor(daysPregnant / 7);
  const extraDays = daysPregnant- currentWeek*7;

  const pageBackgroundColor = "#eef8fc"; // Example pastel color for the page
  const cardBackgroundColor = "#fffffb"; // Example pastel color for the cards

  return (
    <Box sx={{ backgroundColor: pageBackgroundColor, minHeight: '100vh', padding: 2 }}>
      <Card sx={{  margin: 'auto', marginTop: 5, backgroundColor: cardBackgroundColor}}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography gutterBottom variant="h5" component="div">
                Pregnancy Week {currentWeek}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {name ? name + " is" : "You are"} {currentWeek} weeks and {extraDays} days pregnant.
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {<WeekImage weekNumber={currentWeek} />}
            </Grid>
            <Grid item xs={5}  sx={{ textAlign: 'right' }}>
              {name ?
                  <>
                    <Typography gutterBottom variant="h5" component="div">
                      {name} is pregnant!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      They got this!
                    </Typography>
                  </>
                  :
                  <>
                    <Typography gutterBottom variant="h5" component="div">
                      You can do it!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Everything is going to be okay.
                    </Typography>
                  </>
              }
            </Grid>
          </Grid>
          <PregnancyInfoCard daysPregnant={daysPregnant} name={name} />
          <HealthLinksAccordion />
          <ExternalRainbowButtons currentWeek={currentWeek} />
        </CardContent>
      </Card>
    </Box>
  );
}

function ExternalRainbowButtons({currentWeek}){
  return(
      <>
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
      </>
  );
}

function PregnancyInfoCard({ daysPregnant, name }) {
  const weeksPregnant = Math.floor(daysPregnant / 7);
  const totalDays = 40 * 7; // Total days in a typical 40-week pregnancy
  const percentagePregnant = Math.floor((daysPregnant / totalDays) * 100);
  const daysToBirth = 40*7-daysPregnant;
  const weeksToBirth = Math.floor(daysToBirth / 7);
  let trimester;
  let additionalInfo;
  const weekInfo = weekData[weeksPregnant];
  const fruitName = fruitData[weeksPregnant];
  const yourComputed = name ? name+"'s" : "Your";
  const yourComputedLC = name ? name+"'s" : "your";
  const youAreComputed = name ? name+" is" : "You are";
  const youHaveComputed = name ? name+" has" : "You have";

  const infoBackgroundColor = "#edfcf9";

  if (weeksPregnant >= 2 && weeksPregnant <= 12) {
    trimester = "first";
    additionalInfo = "This is a crucial time for the development of the baby's vital organs.";
  } else if (weeksPregnant >= 13 && weeksPregnant <= 27) {
    trimester = "second";
    additionalInfo = "The risk of miscarriage drops significantly. This is often considered the easiest trimester.";
  } else if (weeksPregnant >= 28 && weeksPregnant <= 42) {
    trimester = "third";
    additionalInfo = "The baby is growing larger and getting ready for birth. You might start to feel more discomfort.";
  } else {
    trimester = "out of typical range";
    additionalInfo = "The number of days entered does not correspond with typical pregnancy duration.";
  }

return (
    <Card sx={{ margin: 'auto', marginTop: 5, padding: 2 , backgroundColor:infoBackgroundColor}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {fruitName && (
              <Typography gutterBottom variant="h5" component="div">
                {yourComputed} fetus is approximately the size of a {fruitName}
              </Typography>
            )}
            {weekInfo && (
              <>
                <Typography variant="body1" color="text.secondary">
                  {yourComputed} fetus is an estimated {weekInfo["lengthInches"]}in long and weighs {weekInfo["weightLb"]}lbs.
                  In metric {yourComputedLC} fetus is  {weekInfo["lengthCm"]}cm long and weighs {weekInfo["massG"]}g.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  (
                  <Link href="https://babyyourbaby.org/pregnancy/during-pregnancy/fetal-chart/" target="_blank" rel="noopener noreferrer">
                     Data source is here
                  </Link>)
                </Typography>
              </>
            )}
            <Typography gutterBottom variant="h5" component="div">
              {youAreComputed} in the {trimester} trimester
            </Typography>
            <Typography>
              {youHaveComputed} an estimated {daysToBirth} days until birth ({weeksToBirth} weeks).
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {additionalInfo}
            </Typography>
            <Typography variant="h6" component="div" style={{ marginTop: 20 }}>
              Pregnancy Progress: {percentagePregnant}%
            </Typography>
            <PregnancyProgressBar value={percentagePregnant} />

          </Grid>
        </Grid>
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
