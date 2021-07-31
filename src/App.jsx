import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
    </Switch>
  );
}

export default App;
