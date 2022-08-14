import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Vocals from "./routes/Vocals";
import Guitar from "./routes/Guitar";
import Bass from "./routes/Bass";
import Drums from "./routes/Drums";
import Navigation from "./routes/Navigation";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="vocals" element={<Vocals />}></Route>
        <Route path="guitar" element={<Guitar />} />
        <Route path="bass" element={<Bass />} />
        <Route path="drums" element={<Drums />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
