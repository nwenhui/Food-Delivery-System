import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import { userStore } from 'Store/UserStore';

import {
  Login as LoginView,
  Dashboard as DashboardView,
  DashboardC as DashboardCView,
  DashboardR as DashboardRView,
  ProductList as ProductListView,
  SearchC as SearchCView,
  ReviewC as ReviewCView,
  DeliveryC as DeliveryCView,
  CheckoutC as CheckoutCView,
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
       {/* Customer */}
      { userStore.accessRights === 4 &&
        <div>
          <RouteWithLayout
            component={DashboardCView}
            exact
            layout={MainLayout}
            path="/dashboard"
          />
          <RouteWithLayout
            component={ReviewCView}
            exact
            layout={MainLayout}
            path="/reviews"
          />
          <RouteWithLayout
            component={CheckoutCView}
            exact
            layout={MainLayout}
            path="/checkout"
          />
          <RouteWithLayout
            component={DeliveryCView}
            exact
            layout={MainLayout}
            path="/latest_delivery"
          />
          <RouteWithLayout
            component={SearchCView}
            exact
            layout={MainLayout}
            path="/search"
          />
        </div>
      }
      {/* Riders */}
      {userStore.accessRights == 3 &&
        <RouteWithLayout
          component={DashboardRView}
          exact
          layout={MainLayout}
          path="/dashboard"
        />
      }
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
