import React from "react";
import HomePage from "../pages/Home"
import Login from "../pages/session/login";
import {Routes,Route} from 'react-router-dom'
import Item from "../pages/Item/item";
import Customer from "../pages/customer/customer";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='login' element={<Login/>} />
        <Route exact path='item' element={<Item/>} />
        <Route exact path='customer' element={<Customer/>} />
      </Routes>
  );
}

export default App;
