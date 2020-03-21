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
  NewCustomerData,
  IndividualData,
  DeliveryData,
  RiderData
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formControl: {
    minWidth: 120,
  }
}));

const ManagerDashboard = () => {
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
          lg={4}
          sm={4}
          xl={4}
          xs={5}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Summary</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={summary}
              onChange={handleCategoryChange}
              >
              <MenuItem value={1}>Sales</MenuItem>
              <MenuItem value={2}>Customer</MenuItem>
              <MenuItem value={3}>Delivery</MenuItem>
              <MenuItem value={4}>Rider</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid
            item
            lg={4}
            sm={4}
            xl={4}
            xs={5}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid
            item
            lg={2}
            sm={2}
            xl={2}
            xs={2}
          >
            <Button
              color="primary"
              size="small"
              variant="contained"
            >
              Enter
            </Button>
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
            <NewCustomerData />
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
            <IndividualData />
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
            <DeliveryData />
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
            <RiderData />
          </Grid>
        </Grid>

    </div>
  );
};

export default ManagerDashboard;
