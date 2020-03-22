import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { SearchToolbar } from './component';


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

const SearchC = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <SearchToolbar />

    </div>
  );
};

export default SearchC;
