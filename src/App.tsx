import React, { useState, useEffect } from 'react';
import './App.css';
import DateHeader from './components/DateHeader';
import GoalNote from './components/GoalNote';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchApi } from './helpers/fetch';

interface IGoal {
  name: string;
  startDate: Date;
  endDate: Date;
  startValue: number;
  endValue: number;
  currentValue: number;
  category: string;
}

interface IApiResponse<T> {
  data: T;
  error: Error;
}

function App() {
  const [data, setData] = useState<IGoal[]>([]);

  useEffect(() => {
    console.log('running effect');
    fetchApi<IApiResponse<IGoal[]>>('http://localhost:8000/goals')
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <DateHeader />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>💪 Fitness</Typography>
        </AccordionSummary>
        {data.map((goal) => (
          <GoalNote
            name={goal.name}
            currentValue={goal.currentValue}
            startDate={new Date(goal.startDate)}
            endDate={new Date(goal.endDate)}
            endValue={goal.endValue}
            startValue={goal.startValue}
          />
        ))}
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography> 👨‍🎓 Learning</Typography>
        </AccordionSummary>
        <GoalNote
          name={'Read Books - books'}
          startDate={new Date('2021-02-02')}
          endDate={new Date('2021-06-10')}
          currentValue={8}
          endValue={12}
          startValue={0}
        />
        <GoalNote
          name={'Web Dev Courses - courses'}
          startDate={new Date('2021-02-02')}
          endDate={new Date('2021-09-01')}
          currentValue={1}
          endValue={10}
          startValue={0}
        />
        <GoalNote
          name={'Read Books - books'}
          startDate={new Date('2021-02-02')}
          endDate={new Date('2021-06-10')}
          currentValue={8}
          endValue={12}
          startValue={0}
        />
      </Accordion>
    </div>
  );
}

export default App;
