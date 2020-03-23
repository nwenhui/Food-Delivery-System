import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import WorkIcon from '@material-ui/icons/Work';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const accessRights = 4; // query accessRights

  const customerPages = [
    {
      title: 'Summary',
      href: '/customer_dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Search',
      href: '/customer_search',
      icon: <SearchIcon />
    },
    {
      title: 'Review',
      href: '/customer_review',
      icon: <RateReviewIcon />
    },
    {
      title: 'Checkout',
      href: '/customer_checkout',
      icon: <ShoppingCartIcon />
    },
    {
      title: 'Settings',
      href: '/customer_settings',
      icon: <SettingsIcon />
    }
  ];

  const managerPages = [
    {
      title: 'Summary',
      href: '/manager_dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Promotion',
      href: '/manager_promotion',
      icon: <CardGiftcardIcon />
    }
  ];

  const riderPages = [
    {
      title: 'Summary',
      href: '/rider_dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Work Schedule',
      href: '/rider_schedule',
      icon: <WorkIcon />
    },
    {
      title: 'Review',
      href: '/rider_review',
      icon: <RateReviewIcon />
    }
  ];

  const staffPages = [
    {
      title: 'Summary',
      href: '/staff_dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Food Item',
      href: '/staff_foodItem',
      icon: <SearchIcon />
    },
    {
      title: 'Promotion',
      href: '/staff_promotion',
      icon: <CardGiftcardIcon />
    },
    {
      title: 'Reviews',
      href: '/staff_review',
      icon: <ShoppingCartIcon />
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={
            (accessRights == 1) ? managerPages :
            (accessRights == 2) ? staffPages:
            (accessRights == 3) ? riderPages:
            customerPages }
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
