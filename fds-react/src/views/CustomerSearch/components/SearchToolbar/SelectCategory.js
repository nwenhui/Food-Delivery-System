import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectCategory = props => {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Halal'}>Halal</MenuItem>
          <MenuItem value={'Seafood'}>Seafood</MenuItem>
          <MenuItem value={'Meat'}>Meat</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SelectCategory.propTypes = {
    className: PropTypes.string
  };
  
export default SelectCategory;