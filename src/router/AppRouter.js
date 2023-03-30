import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Navbar from "../components/UI/navbar/Navbar";
import CreateUpdatePage from "../pages/CreateUpdatePage";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create"
          element={<CreateUpdatePage />}
        />
         <Route path="/edit/:id" element={<CreateUpdatePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
