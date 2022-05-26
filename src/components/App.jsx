import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

import authOperations from "redux/auth/authOperations.js";
import { Layout } from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage.jsx";
import RegisterPage from "pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "pages/LoginPage/LoginPage.jsx";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage.jsx";
import ContactsPage from "pages/ContactsPage/ContactsPage";


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
