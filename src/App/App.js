import React from "react";
import HomePage from "../pages/Home"
import Login from "../pages/session/login";
import {Routes,Route} from 'react-router-dom'
import NotFound from "../pages/session/NotFound";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='login' element={<Login/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
  );
}

export default App;
