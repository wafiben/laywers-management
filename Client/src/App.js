import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/ContactUs/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Login />} />
              <Route path="/admin-dashbaord" element={<Dashboard />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
