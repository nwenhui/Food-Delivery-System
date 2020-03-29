import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';

import {
	AddPromo,
	CurrentPromo,
	data
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formControl: {
    minWidth: 120,
  }
}));

const StaffPromo = () => {
  const classes = useStyles();
  const [openDiv, setOpenDiv] = useState(false);

  const handleOpenDiv = () => {
    setOpenDiv(!openDiv);
  }

  // List all promotion
  // QUERY: fis, name, original, discounted, dailyLimit, categories[]

  return (
    <div className={classes.root}>

      <Grid
        container
        item
        spacing={4}
      >
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
						onClick={handleOpenDiv}
						style={{width:"130px"}}
					>
						Add Promotion
					</Button>
          {openDiv && <AddPromo onClick={handleOpenDiv}/> }
				</Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <CurrentPromo data={data} />
        </Grid>
			</Grid>
    </div>
  );
};

export default StaffPromo;
