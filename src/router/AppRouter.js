import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Navbar from "../components/UI/navbar/Navbar";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create"
          element={<CreatePage />}
        />
         <Route path="/edit/:id" element={<EditPage/>} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
