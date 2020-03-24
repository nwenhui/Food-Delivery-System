import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import data from './components/data';

import {
    FoodItem,
    Total
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const CustomerCheckout = () => {
	const classes = useStyles();
	
	const [value, setValue] = React.useState('cash');

	const handleChange = event => {
    setValue(event.target.value);
  };
  
  const handleCheckout = () => {
    if(value === "cash") console.log(true)
    else console.log(false)
  }

  // SQL: pass table data from here because need oid for checkout

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        className="test"
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <FoodItem data={data.foodItem}/>
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <Total />
        </Grid>
        <Grid>
					<FormControl component="fieldset">
						<FormLabel component="legend">Payment Mode</FormLabel>
						<RadioGroup aria-label="paymentMode" value={value} onChange={handleChange}>
							<FormControlLabel value="cash" control={<Radio />} label="Cash" />
							<FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
						</RadioGroup>
					</FormControl>
					<Button style={{marginTop:"75px"}} color="primary" variant="contained" onClick={handleCheckout}>Check Out</Button>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default CustomerCheckout;