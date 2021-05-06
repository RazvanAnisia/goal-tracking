import React from 'react';
import './App.css';
import DateHeader from './components/DateHeader';
import GoalNote from './components/GoalNote';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function App() {
  return (
    <div className="App">
      <DateHeader />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>💪 Fitness</Typography>
        </AccordionSummary>
        <GoalNote
          name={'Weight Loss - KG'}
          currentValue={87.4}
          startDate={new Date('2021-02-22')}
          endDate={new Date('2021-11-05')}
          endValue={86}
          startValue={92}
        />
        <GoalNote
          name={'Arm size - cm'}
          startDate={new Date('2021-02-02')}
          endDate={new Date('2021-06-01')}
          currentValue={39.5}
          endValue={42}
          startValue={37}
        />
        <GoalNote
          name={'Pushup PR - pushups'}
          startDate={new Date('2021-02-02')}
          endDate={new Date('2021-05-12')}
          currentValue={20}
          endValue={60}
          startValue={10}
        />
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
