import React from "react";
import Login from "./users/login";
import Register from "./users/register";
import Home from "./users/home";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
       <Route exact path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/home" element={<Home />} />
    </Routes>
 </>
  );
}

export default App;
