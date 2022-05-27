import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { PublicRoute } from "./PublicRoute/PublicRoute.jsx";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute.jsx";
import authOperations from "redux/auth/authOperations.js";
import { Layout } from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage.jsx";
import RegisterPage from "pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "pages/LoginPage/LoginPage.jsx";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage.jsx";
import ContactsPage from "pages/ContactsPage/ContactsPage";


export const App = () => {

  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.auth.isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    !isFetchingCurrentUser && (
       <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute restricted><LoginPage /></PublicRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
   )
  );
};
