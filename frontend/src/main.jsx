import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { admin, router } from "./utils/router";
import Universal from "./components/Universal";
import "../public/fontawesome/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollContextProvider from "./context/ScrollContext";
import ServiceID from "./pages/ServiceID";
import Page404 from "./pages/404";
import Login from "./admin/login";
import UniLayout from "./layouts/layout";
import { AuthProvider } from "./context/auth-context";
import PrivateRoute from "./utils/private-route";
AOS.init({
  duration: 800,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Universal />}>
              {router.map((e) => (
                <Route key={e.id} path={e.path} element={e.element} />
              ))}
            </Route>
            {admin.map((e) => (
              <Route key={e.id} element={<PrivateRoute />}>
                <Route element={<UniLayout />}>
                  <Route path={e.path} element={e.element} />
                </Route>
              </Route>
            ))}
            <Route element={<Login />} path="/login-as-admin" />
            <Route element={<ServiceID />} path="/service/:id" />
            <Route element={<Page404 />} path="*" />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ScrollContextProvider>
  </React.StrictMode>
);
