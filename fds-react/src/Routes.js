import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  Customer as CustomerLayout,
  Manager as ManagerLayout,
  Rider as RiderLayout,
  Staff as StaffLayout } from './layouts';

import {
  Login as LoginView,
  CustomerDashboard as CustomerDashboardView,
  CustomerCheckout as CustomerCheckoutView,
  Dashboard as DashboardView,
  RiderDashboard as RiderDashboardView,
  RiderSchedule as RiderScheduleView,
  ManagerDashboard as ManagerDashboardView,
  StaffDashboard as StaffDashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect
        exact
        from="/"
        to="/dashboard"
      /> */}
      <Route
        exact
        path='/'
        component={LoginView}
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/signup"
      />
      <RouteWithLayout
        component={ManagerDashboardView}
        exact
        layout={ManagerLayout}
        path="/manager_dashboard"
      />
      <RouteWithLayout
        component={StaffDashboardView}
        exact
        layout={StaffLayout}
        path="/staff_dashboard"
      />
      <RouteWithLayout
        component={RiderDashboardView}
        exact
        layout={RiderLayout}
        path="/rider_dashboard"
      />
      <RouteWithLayout
        component={RiderScheduleView}
        exact
        layout={RiderLayout}
        path="/rider_schedule"
      />
      <RouteWithLayout
        component={CustomerDashboardView}
        exact
        layout={CustomerLayout}
        path="/customer_dashboard"
      />
      <RouteWithLayout
        component={CustomerCheckoutView}
        exact
        layout={CustomerLayout}
        path="/customer_checkout"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
