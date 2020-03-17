import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  NumOrdersR,
  Salary,
  NumHours,
  PastDeliveries
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const DashboardRider = () => {
  const classes = useStyles();

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
          <NumOrdersR />
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

export default DashboardRider;
