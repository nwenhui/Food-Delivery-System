import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';

import {
  PastScheduleList
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const RiderSchedule = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [showData, setShowData] = useState(false);

  const handleEnterBtton = () => {
    console.log(moment(selectedDate).month());
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
            lg={9}
            sm={9}
            xl={9}
            xs={12}
          >
            <text style={{marginRight:"8px"}}>Select Month:</text>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
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
            lg={9}
            md={9}
            xl={9}
            xs={12}
          >
            <PastScheduleList />
          </Grid>
        }

      </Grid>

    </div>
  );
};

export default RiderSchedule;
