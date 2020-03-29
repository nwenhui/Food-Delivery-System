import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  RestaurantReview,
  data
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formControl: {
    minWidth: 120,
  }
}));

const StaffReview = () => {
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
            lg={12}
            sm={12}
            xl={12}
            xs={12}
        >
            <RestaurantReview data={data} />
        </Grid>
        </Grid>
    </div>
  );
};

export default StaffReview;
