import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import SigninPage from "./components/pages/Signin";

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/signin' component={SigninPage} />
    </Switch>
  );
}

export default App;
