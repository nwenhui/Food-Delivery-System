import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { deliveryStore } from 'Store/DeliveryStore';
import { TimeComponent, RiderReview } from './component';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  avatar1: {
    backgroundColor: theme.palette.error.dark,
    height: 56,
    width: 56
	},
	avatar2: {
    backgroundColor: theme.palette.error.light,
    height: 56,
    width: 56
	},
	avatar3: {
    backgroundColor: theme.palette.warning.light,
    height: 56,
    width: 56
	},
	avatar4: {
    backgroundColor: theme.palette.info.light,
    height: 56,
    width: 56
	},
	avatar5: {
    backgroundColor: theme.palette.success.light,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
}));

const DashboardC = () => {
  const classes = useStyles();

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
          sm={12}
          xl={12}
          xs={12}
        >
					<TimeComponent 
						title = "Time Order Placed"
						data = { deliveryStore.timeOrderPlaced }
						icon = {
							<Avatar className={classes.avatar1}>
								<SentimentVeryDissatisfiedIcon className={classes.icon} />
							</Avatar>
						}
          />
        </Grid>
				<Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
					<TimeComponent 
						title = "Depart Time to Restaurant"
						data = { deliveryStore.departTimeToR }
						icon = {
							<Avatar className={classes.avatar2}>
								<SentimentDissatisfiedIcon className={classes.icon} />
							</Avatar>
						}
          />
        </Grid>
				<Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
					<TimeComponent 
						title = "Arrival Time to Restaurant"
						data = { deliveryStore.timeOrderPlaced }
						icon = {
							<Avatar className={classes.avatar3}>
								<SentimentSatisfiedIcon className={classes.icon} />
							</Avatar>
						}
          />
        </Grid>
				<Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
					<TimeComponent 
						title = "Depart Time to Customer"
						data = { deliveryStore.timeOrderPlaced }
						icon = {
							<Avatar className={classes.avatar4}>
								<SentimentSatisfiedAltIcon className={classes.icon} />
							</Avatar>
						}
          />
        </Grid>
				<Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
					<TimeComponent 
						title = "Arrival Time to Customer"
						data = { deliveryStore.timeOrderPlaced }
						icon = {
							<Avatar className={classes.avatar5}>
								<SentimentVerySatisfiedIcon className={classes.icon} />
							</Avatar>
						}
          />
        </Grid>
      </Grid>
			<RiderReview />
    </div>
  );
};

export default DashboardC;
