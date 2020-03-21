import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


import {
  RestaurantData
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formControl: {
    minWidth: 120,
  }
}));

const StaffDashboard = () => {
  const classes = useStyles();
  const [summary, setSummary] = useState('');
  const [selectedCategory, handleCategoryChange] = useState('');
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
          lg={2}
          sm={2}
          xl={2}
          xs={0}
        >
        </Grid>
          <Grid
            item
            lg={10}
            sm={10}
            xl={10}
            xs={12}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
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
            <RestaurantData />
          </Grid>
        </Grid>

    </div>
  );
};

export default StaffDashboard;
