import React from 'react';
import './App.css';
import Labs from "./Labs";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/Labs/*" element={<Labs />} />
          </Routes>
      <div>
        <Labs />
      </div>
      </HashRouter>
  );
}

export default App;
