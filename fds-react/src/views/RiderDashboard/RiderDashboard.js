import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  TotalOrders,
  TotalHours,
  Salary,
  Sidebar
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const RiderDashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <Grid
          container
          item
          spacing={4}
        >
        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={0}
        >
        </Grid>
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={12}
          >
            <TotalOrders />
          </Grid>
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={12}
          >
            <TotalHours />
          </Grid>
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={12}
          >
            <Salary />
          </Grid>
        </Grid>

    </div>
  );
};

export default RiderDashboard;
