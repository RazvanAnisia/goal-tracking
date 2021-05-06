import React, { FC } from 'react';
import { getDateDiffInDays, getDateString } from '../../helpers/dates';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface IGoalNote {
  name: string;
  endDate: Date;
  startDate: Date;
  endValue: number;
  startValue: number;
  currentValue: number;
}

const GoalNote: FC<IGoalNote> = (props: IGoalNote) => {
  const { name, endDate, startValue, endValue, currentValue, startDate } = props;

  const getPercentage = () => {
    console.log({ startValue, endValue });
    return ((startValue - currentValue) / (startValue - endValue)) * 100;
  };

  const daysLeft = getDateDiffInDays(new Date(), endDate);
  const isInLastQuarterOfTime = (daysLeft / getDateDiffInDays(startDate, endDate)) * 100 < 25 && getPercentage() < 75;

  return (
    <div style={{ paddingTop: 5 }}>
      <Box width="50%" mr={1}>
        {isInLastQuarterOfTime && '❗'} <b>{name}</b>
      </Box>
      <Box display="flex" alignItems="center">
        <Box minWidth={35} padding="2px">
          {currentValue}
        </Box>

        <Box width="50%" mr={1}>
          <LinearProgress
            color={isInLastQuarterOfTime ? 'secondary' : 'primary'}
            value={getPercentage()}
            variant="determinate"
          />
        </Box>
        <Box minWidth={35}>{endValue}</Box>

        <Box width="30%" mr={1}>
          {daysLeft} / {getDateDiffInDays(startDate, endDate)} days left. 📅 {getDateString(endDate)}
        </Box>
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(getPercentage())}%`}</Typography>
      </Box>
    </div>
  );
};

export default GoalNote;
