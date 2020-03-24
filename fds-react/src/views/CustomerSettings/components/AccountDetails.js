import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    userName: 'Shen',
    password: 'gfshdgdfah',
  });

  const [creditcard, setCreditcard] = useState(["425543", "543321"]);
  const [location, setLocation] = useState(["Jurong Street 10"]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAddCreditCard = () => {
    setCreditcard(creditcard.concat("Add Credit Card"));
  }

  const handleCreditCardChange = (event, index) => {
    creditcard[index] = event.target.value;
    console.log(creditcard)
    setCreditcard(creditcard)
    console.log(typeof event.target.value)
    console.log(index)
  }

  const handleAddLocation = () => {
    setLocation(location.concat("Add Location"));
  }

  const handleLocationChange = (event, index) => {
    location[index] = event.target.value;
    setLocation(location)
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={1}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the user name"
                label="User Name"
                margin="dense"
                name="userName"
                onChange={handleChange}
                required
                value={values.userName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Password"
                margin="dense"
                name="password"
                onChange={handleChange}
                required
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {creditcard.map((value, index) => {
                return (
                  <div key={index}>
                    <TextField
                      fullWidth
                      label="CreditCard"
                      margin="dense"
                      name="creditCard"
                      onChange={(e) => handleCreditCardChange(e, index)}
                      type="number"
                      value={value}
                      variant="outlined"
                    />
                  </div>
                  
                );

              })}
             
              <Button onClick={handleAddCreditCard}>Add CreditCard</Button>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {location.map((value,index) => {
                return (
                  <div key={index}>
                    <TextField
                    fullWidth
                    label="Location"
                    margin="dense"
                    name="location"
                    onChange={handleLocationChange}
                    required
                    value={value}
                    variant="outlined"
                  />
                  </div>
                );
              })}
             
              <Button onClick={handleAddLocation}>Add Location</Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;