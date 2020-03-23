import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { SearchToolbar } from './components';
import { FoodItem, RestaurantFoodItem, RestaurantReview } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const CustomerSearch = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <SearchToolbar />
      <FoodItem />
      <RestaurantFoodItem />
      <RestaurantReview />
    </div>
  );
};

export default CustomerSearch;