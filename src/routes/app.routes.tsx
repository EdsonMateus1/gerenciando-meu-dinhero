import React from "react";

import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Signin from "../pages/Signin";

import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
