import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Navbar from "../components/UI/navbar/Navbar";
import CreateUpdateForm from "../components/createHelpDataForm/CreateUpdateForm";
import CreateUpdatePage from "../pages/CreateUpdatePage";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cFeate"
          element={<CreateUpdatePage />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
