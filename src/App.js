import React from 'react';
import './App.css';
import Home from "./Home"
import SearchPage from "./SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
        {/* SearchPage or Result Page */}
      </Router>
    </div>
  );
}

export default App;
