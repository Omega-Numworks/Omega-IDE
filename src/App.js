import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './ide/Editor.js';
import Simulator from './ide/Simulator.js';
import LocalStorageConnector from './LocalStorageConnector.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <Routes>
            <Route index element={<Editor base="/" connector={LocalStorageConnector} vercel={false} />} exact />
            <Route path="/simulator" element={Simulator} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
