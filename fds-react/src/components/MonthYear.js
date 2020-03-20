import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DateTimeSelector from './DateTimeSelector';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const MonthYear = props => {
  console.log(props)
  const { className, ...rest } = props;

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(props.defaultValue);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClick = () => {
    props.onClick(selectedDate);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Select Month/ Year
            </Typography>
            <DateTimeSelector
              handleChange={(e) => handleDateChange(e)}
              defaultValue={selectedDate}
              timePicker={false}
              format={"YYYY-MM"}
              // mode={'month'}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={handleClick}
            >
              ENTER
            </Button>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DateRangeIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
       
      </CardContent>
    </Card>
  );
};

MonthYear.propTypes = {
  className: PropTypes.string
};

export default MonthYear;
