import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/omega.ide.sass'
import Editor from './ide/Editor.js';
import Main from './etc/Main.js';
import Simulator from './ide/Simulator.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/editor" component={() => <Editor base="/" />} exact />
            <Route path="/simulator" component={Simulator} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
