import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

import theme from "assets/theme";
import themeDark from "assets/theme-dark";

import routes from "routes";

import { useMaterialUIController, setMiniSidenav } from "context";
import useAuth from "useAuth";

import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

import "./index.css";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, layout, sidenavColor, transparentSidenav, whiteSidenav, darkMode } =
    controller;
  const { user, updateUser } = useAuth(); // Use the custom hook
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

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
