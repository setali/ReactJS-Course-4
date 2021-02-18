import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import New from "./New";
import Full from "./Full";

const Router = () => {
  return (
    <Switch>
      <Route path="/person" exact component={List} />
      <Route path="/person/new" exact component={New} />
      <Route path="/person/:id" exact component={Full} />
    </Switch>
  );
};

export default Router;
