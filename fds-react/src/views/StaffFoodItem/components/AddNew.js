import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { FormControl, InputLabel, Input, MenuItem, Select, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const AddNew = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [selectedCategory, setSelectedCategory] = useState('customer');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [dailyLimit, setDailyLimit] = useState('');

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleDailyLimit = (e) => {
    setDailyLimit(e.target.value)
  }
  
  const handleEnterButton = () => {
    console.log(selectedCategory)
    console.log(name)
		console.log(price)
		console.log(dailyLimit)
    props.onClick();

  }

  return (
    <div 
      style={{
        borderStyle: "solid",
        border: "1px solid black",
        backgroundColor: "white",
        zIndex: "1",
        position: "fixed",
        left: "40%",
        top: "30%",
        padding: "46px",
        width: "300px"
      }}
    >
			<FormControl style={{width: "200px"}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          onChange={handleSelectChange}
        >
          <MenuItem value={"seafood"}>Seafood</MenuItem>
          <MenuItem value={"halal"}>Halal</MenuItem>
          <MenuItem value={"chicken"}>Chicken</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl>
				<InputLabel htmlFor="my-input">Name</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" onChange={handleName}/>
      </FormControl>
      
			<FormControl>
				<InputLabel htmlFor="my-input">Price</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" onChange={handlePrice} />
			</FormControl>

			<FormControl>
				<InputLabel htmlFor="my-input">Daily Limit</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" onChange={handleDailyLimit} />
			</FormControl>
      <Button
        color="primary"
        size="small"
        variant="contained"
        onClick={handleEnterButton}
      >
        Enter
      </Button>
    </div>
  );
};

AddNew.propTypes = {
  className: PropTypes.string
};

export default AddNew;
