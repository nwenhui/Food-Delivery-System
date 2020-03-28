import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { FormControl, InputLabel, Input, MenuItem, Select, TextField, Button } from '@material-ui/core';
import moment from 'moment';

import {
  AvgOrders,
  NumOrders,
  TopFive,
  TotalProfit
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showData, setShowData] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e);
  }

  const handleEnterBtton = () => {
    console.log(moment(selectedDate).month())
    setShowData(true);
  }

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
          <FormControl>
          <TextField
            label="Select Month"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDateChange}
          />
          </FormControl>
          <Button
            color="primary"
            size="small"
            variant="contained"
            onClick={handleEnterBtton}
          >
            Enter
          </Button>
          </Grid>
          { showData &&
            <Grid
              item
              lg={4}
              md={4}
              xl={4}
              xs={12}
            >
              <AvgOrders data={32}/>
            </Grid>
          }
          { showData && 
            <Grid
              item
              lg={4}
              sm={4}
              xl={4}
              xs={12}
            >
              <NumOrders data={20} />
            </Grid>
          }
          { showData && 
            <Grid
              item
              lg={4}
              sm={4}
              xl={4}
              xs={12}
            >
              <TotalProfit data={20} />
            </Grid>
          }
          { showData && 
            <Grid
              item
              lg={4}
              sm={4}
              xl={4}
              xs={12}
            >
              <TopFive data={["Chicken Rice", "Pudding", "Apple", "Pear", "Watermelon"]} />
            </Grid>
          }

        </Grid>

    </div>
  );
};

export default StaffDashboard;
