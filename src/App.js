import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

import { jwtDecode } from "jwt-decode";

import theme from "assets/theme";
import themeDark from "assets/theme-dark";

import routes from "routes";

import { useMaterialUIController, setMiniSidenav } from "context";

import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

import "./index.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, layout, sidenavColor, transparentSidenav, whiteSidenav, darkMode } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Load user data from token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Filter routes based on roles and protection
  const filteredRoutes = routes.filter((route) => {
    if (route.protected && !user) {
      return false; // Protected route but no user logged in, so hide it
    }

    if (route.roles && !route.roles.includes(user?.role)) {
      return false; // User doesn't have the required role, hide the route
    }

    if (!route.roles) {
      return false; // Route has no roles, so we hide it
    }

    return true;
  });

  const renderRoutes = (allRoutes) =>
    allRoutes.map((route) => (
      <Route path={route.route} element={route.component} key={route.key} />
    ));

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="HMIS"
            routes={filteredRoutes} // Pass filtered routes to sidebar
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>{renderRoutes(filteredRoutes)}</Routes>
    </ThemeProvider>
  );
}
