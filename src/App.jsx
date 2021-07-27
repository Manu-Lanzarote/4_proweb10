import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
// import SigninPage from "./components/pages/signin/Signin";

import GlassForm from "./components/styled_components/glass_form/GlassForm";

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/contact' component={GlassForm} />
    </Switch>
  );
}

export default App;
