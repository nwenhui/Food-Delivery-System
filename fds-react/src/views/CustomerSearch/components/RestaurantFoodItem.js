import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

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
} from '@material-ui/core';

import data from './data';

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


const RestaurantFoodItem = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(data.restaurantFoodItem);
  const tempSelectedItems = [];

  const handleAdd = (id) => {
    let notAdded = true;
    for(let i = 0; i < tempSelectedItems.length; i++) {
      if (tempSelectedItems[i].id == id) {
        tempSelectedItems[i].count += 1;
        notAdded = false;
        break;
      } 
    }
    if(notAdded) {
      tempSelectedItems.push({id: id, count: 1});
    }
    console.log(tempSelectedItems)
  }

  const handleRemove = (id) => {
    for(let i = 0; i < tempSelectedItems.length; i++) {
      if (tempSelectedItems[i].id == id) {
        if(tempSelectedItems[i].count > 0) tempSelectedItems[i].count -= 1;
        break
      }
    }
    console.log(tempSelectedItems)
  }

  // trigger
  const handleAddtoCart = () => {
    console.log(tempSelectedItems)
  }

  const showNumber = (id) => {
    for(let i = 0; i<tempSelectedItems.length; i++) {
      if(tempSelectedItems[i].id == id) {
        console.log(tempSelectedItems[i].count)
        return tempSelectedItems[i].count;
      }
    }
    console.log("return 0")
    return 0;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title={props.restaurantname}
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{valign:'top'}}>Food Item</TableCell>
                  <TableCell>Original Price</TableCell>
                  <TableCell>Discounted Price</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.discounted}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleRemove(order.oid)}><RemoveCircleIcon/></Button>
                      {showNumber(order.oid)}
                      <Button onClick={() => handleAdd(order.oid)}><AddCircleIcon/></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button 
              style={{float:"right", marginRight:"88px"}}
              onClick={handleAddtoCart}
            > 
              Add to Cart 
            </Button>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions} />
    </Card>
  );
};

RestaurantFoodItem.propTypes = {
  className: PropTypes.string
};

export default RestaurantFoodItem;