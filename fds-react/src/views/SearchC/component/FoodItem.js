import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { searchStore } from 'Store/SearchStore';
import { StatusBullet } from 'components';

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

  const [orders] = useState(searchStore.foodItem);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Past Orders"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{valign:'top'}}>Order Ref</TableCell>
                  <TableCell>Restaurant</TableCell>
                  <TableCell>Food Item</TableCell>
                  <TableCell>Original Price</TableCell>
                  <TableCell>Discounted Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>{order.oid}</TableCell>
                    <TableCell>{order.restaurant.name}</TableCell>
                    <TableCell><ol>{order.foodItem.map(item => <li>{item}</li>)}</ol></TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.discounted}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions} />
    </Card>
  );
};

FoodItem.propTypes = {
  className: PropTypes.string
};

export default FoodItem;
