import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
