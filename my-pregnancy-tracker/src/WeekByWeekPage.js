import { useParams } from 'react-router-dom';

function WeekByWeekPage() {
  const { dueDate } = useParams();
  const currentWeek = calculatePregnancyWeek(dueDate);

  return (
    <div>
      <p>You are week {currentWeek} in pregnancy.</p>
      <a href={`https://www.whattoexpect.com/pregnancy/week-by-week/week-${currentWeek}.aspx`}>Learn more about week {currentWeek}</a>
    </div>
  );
}

function calculatePregnancyWeek(dueDate) {
  const due = new Date(dueDate);
  const today = new Date();
  const diff = due.getTime() - today.getTime();
  const days = diff / (1000 * 3600 * 24);
  const weeks = days / 7;

  return Math.floor(40 - weeks); // Assuming 40 weeks total, adjust as necessary
}

export default WeekByWeekPage;
