import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Warning from "./screens/Warning";

import Navbar from './components/Nav';
import Routes from "./routing/Routes";

function App() {
  return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact component={ Routes } />
          </Switch>
        </main>

      </BrowserRouter>

  );
}

export default App;
