import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

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

const FoodItem = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(props.data);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Current Promotion"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Food Item ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Original Price</TableCell>
                  <TableCell>Discounted Price</TableCell>
                  <TableCell>Daily Limit</TableCell>
                  <TableCell>Categories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>{order.fid}</TableCell>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.original}</TableCell>
                    <TableCell>{order.discounted}</TableCell>
                    <TableCell>{order.dailyLimit}</TableCell>
                    <TableCell>
											{ order.categories.map(category => {
												return <li>{category}</li>
											})}
										</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
    </Card>
  );
};

FoodItem.propTypes = {
  className: PropTypes.string
};

export default FoodItem;
