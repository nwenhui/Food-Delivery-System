import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment'

import {
  TotalNew, TotalOrders, TotalProfit,
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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showCustomer, setShowCustomer] = useState(false);
  const [showRider, setShowRider] = useState(false);
  const [showDelvery, setShowDelivery] = useState(false);
  const [showSales, setShowSales] = useState(false);


  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value)
    console.log(e.target.value)
  }

  const handleDateChange = (e) => {
    console.log(e)
    setSelectedDate(e)
  }

  const handleEnterBtton = () => {
    console.log(selectedCategory)
    console.log(moment(selectedDate).month())
    switch(selectedCategory) {
      case "customer":
        setShowCustomer(true);
        setShowDelivery(false);
        setShowRider(false);
        setShowSales(false);
        break;
      case "delivery":
        setShowCustomer(false);
        setShowDelivery(true);
        setShowRider(false);
        setShowSales(false);
        break;
      case "rider":
        setShowCustomer(false);
        setShowDelivery(false);
        setShowRider(true);
        setShowSales(false);
        break;
      case "sales":
        setShowCustomer(false);
        setShowDelivery(false);
        setShowRider(false);
        setShowSales(true);
        break;
      default:
        setShowCustomer(false);
        setShowDelivery(false);
        setShowRider(false);
        setShowSales(false);
    }
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
          lg={4}
          sm={4}
          xl={4}
          xs={5}
        >
          <FormControl className={classes.formControl} style={{marginTop: "-14px"}}>
            <InputLabel id="demo-simple-select-label">Summary</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCategory}
              onChange={handleSelectChange}
            >
              <MenuItem value={"sales"}>Sales</MenuItem>
              <MenuItem value={"customer"}>Customer</MenuItem>
              <MenuItem value={"delivery"}>Delivery</MenuItem>
              <MenuItem value={"rider"}>Rider</MenuItem>
            </Select>
          </FormControl>
        </Grid>
          <text style={{marginTop: "17px"}}>Selet Month: </text>
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
              onClick={handleEnterBtton}
            >
              Enter
            </Button>
          </Grid>
          { showSales && 
            <Grid
              item
              lg={4}
              sm={4}
              xl={4}
              xs={12}
            >
              <TotalNew data={20} />
            </Grid>
          }
          { showSales && 
            <Grid
              item
              lg={4}
              sm={4}
              xl={4}
              xs={12}
            >
              <TotalOrders data={20} />
            </Grid>
          }
          { showSales && 
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
          { showCustomer && 
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <IndividualData data={123}/>
            </Grid>
          }
          { showDelvery && 
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <DeliveryData data={123} />
            </Grid>
          }
          { showRider && 
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <RiderData data={123} />
            </Grid>
          }
        </Grid>
    </div>
  );
};

export default ManagerDashboard;
