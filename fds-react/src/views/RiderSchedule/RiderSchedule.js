import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import {
  PastScheduleList
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const RiderDashboard = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

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
            lg={9}
            sm={9}
            xl={9}
            xs={12}
          >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
          </Grid>

          <Grid
            item
            lg={3}
            md={3}
            xl={3}
            xs={0}
          >
          </Grid>
          <Grid
            item
            lg={9}
            md={9}
            xl={9}
            xs={12}
          >
            <PastScheduleList />
          </Grid>
        </Grid>

    </div>
  );
};

export default RiderDashboard;
