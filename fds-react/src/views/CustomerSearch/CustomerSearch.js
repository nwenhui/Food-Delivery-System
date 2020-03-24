import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { FoodItem, RestaurantFoodItem, RestaurantReview } from './components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { SearchInput } from 'components';
import SelectCategory from './components/SelectCategory';
import { Button } from '@material-ui/core';
import RestaurantList from './components/RestaurantList';

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
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const CustomerSearch = () => {
  const classes = useStyles();

  const [search, setSearch] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showRestaurantList, setShowRestaurantList] = useState(false);
  const [showRestaurantFoodItem, setShowRestaurantFoodItem] = useState(false);

  const handleToggle = (event, value) => {
    if(value != null) setSearch(value);
  };

  // trigger
  const handleEnter = () => {
    if (search) {
      console.log(searchValue)
      setShowRestaurantFoodItem(true);
      setShowRestaurantList(false);
    }
    else{
      console.log(selectedCategory)
      setShowRestaurantFoodItem(false);
      setShowRestaurantList(true);
    }

  }

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  }

  const menuItems=[
    {value:'Halal', name:'Halal'},
    {value:'Seafood', name:'Seafood'},
    {value:'Meat', name:'Meat'}
  ];

  return (
    <div className={classes.root}>
      <ToggleButtonGroup
        value={search}
        exclusive
        onChange={handleToggle}
        aria-label="toggle"
      >
        <ToggleButton value={true} aria-label="Search">
          Search Restaurant
        </ToggleButton>
        <ToggleButton value={false} aria-label="Select">
          Select Category
        </ToggleButton>
      </ToggleButtonGroup>
      <Button onClick={handleEnter}>Enter</Button>
      <div className={classes.row}>
        { search ? 
          <SearchInput
            className={classes.searchInput}
            placeholder="Search Item"
            onChange={handleSearchInput}
          /> :
          <SelectCategory 
            value={selectedCategory}
            items={menuItems}
            onChange={handleSelectCategory}
          />
        }
      </div>
      {showRestaurantList ? <RestaurantList /> : ""}
      {showRestaurantFoodItem ? <RestaurantFoodItem restaurantname={searchValue} /> : ""}
      {showRestaurantFoodItem ? <RestaurantReview /> : ""}
    </div>
  );
};

export default CustomerSearch;