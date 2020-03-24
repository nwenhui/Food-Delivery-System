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


const RiderReview = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(data.riderReview);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Rider Reviews"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        direction="desc"
                      >
                        Rider
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>

                  <TableCell sortDirection="asc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        // active
                        direction="asc"
                      >
                        Review
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                  <TableCell>{ order.name }</TableCell>
                    {order.feedbackList.map(feedback => (
                      <TableRow key={order.name}>
                        <div style={{}} >
                          <div>{feedback.content}</div>
                          <div style={{}}>Rating: {feedback.rating}/5</div>
                          <div style={{ borderBottom:"1px solid #ced3db" }}>Posted On: {moment(feedback.date).format('DD/MM/YYYY')}</div>
                        </div>
                        
                      </TableRow>
                    ))}
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

RiderReview.propTypes = {
  className: PropTypes.string
};

export default RiderReview;