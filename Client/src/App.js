import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import Contact from "./Components/Contact/Contact";
import React, { useRef } from 'react'
function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
