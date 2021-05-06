import React, { PureComponent, FC } from 'react';
import { getCurrentDay, getNumberOfWeek, getDaysInYear, getYear, getQuarter, getDateString } from '../../helpers/dates';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const currentDay: number = getCurrentDay(new Date());
const daysInTheYear: number = getDaysInYear(getYear(new Date()));
const weekNumber = getNumberOfWeek();
const percentagePassed = (currentDay / daysInTheYear) * 100;

const DateHeader: FC = () => (
  <div>
    <p>
      📆 {getQuarter(new Date())} {getDateString(new Date())}
    </p>
    <b>📅 Week </b> {weekNumber}/52 = {52 - weekNumber} weeks left
    <br />
    <p>
      ⏳ Day {currentDay} of {daysInTheYear} = {daysInTheYear - currentDay} days left
    </p>
    <br />
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress color="secondary" value={percentagePassed} variant="determinate" />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(percentagePassed)}%`}</Typography>
      </Box>
    </Box>
  </div>
);

export default DateHeader;
