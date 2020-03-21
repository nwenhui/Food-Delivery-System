import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  TotalCustOrders,
  RewardPoints,
  PastOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const RiderSchedule = () => {
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
          lg={2}
          sm={2}
          xl={2}
          xs={0}
        >
        </Grid>
          <Grid
            item
            lg={5}
            sm={5}
            xl={5}
            xs={6}
          >
            <TotalCustOrders />
          </Grid>
          <Grid
            item
            lg={5}
            sm={5}
            xl={5}
            xs={6}
          >
            <RewardPoints />
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            xl={2}
            xs={0}
          >
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            xl={10}
            xs={12}
          >
            <PastOrders />
          </Grid>
        </Grid>

    </div>
  );
};

export default RiderSchedule;
