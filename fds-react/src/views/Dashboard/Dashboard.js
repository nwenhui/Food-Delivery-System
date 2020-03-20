import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { dashboardStore } from 'Store/DashboardStore'
import moment from 'moment';

import {
  Salary,
  NumHours,
  PastDeliveries
} from './components';

import MonthYear from '../../components/MonthYear';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  // handlesubmit gets triggered whenever calendar is clicked
  const handleSubmit = (e) => {
    console.log("Date = ", e)
    dashboardStore.searchDate = e;
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        className="test"
      >
        <Grid
          item
          lg={4}
          sm={4}
          xl={4}
          xs={12}
        >
          <MonthYear 
            defaultValue={dashboardStore.searchDate}
            onClick={(e) => handleSubmit(e)}
          />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <NumHours />
        </Grid>
        <Grid
          item
          lg={4}
          sm={4}
          xl={4}
          xs={12}
        >
          <Salary />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <PastDeliveries />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
