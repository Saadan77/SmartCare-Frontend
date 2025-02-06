import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { navbar } from "examples/Navbars/DashboardNavbar/styles";
import { useMaterialUIController, setTransparentNavbar } from "context";
import routes from "../../../routes";
import { jwtDecode } from "jwt-decode";

function DashboardNavbar({ absolute, light }) {
  const [navbarType, setNavbarType] = useState();
  const [userRole, setUserRole] = useState(null);
  const [controller, dispatch] = useMaterialUIController();
  const { transparentNavbar, fixedNavbar, darkMode } = controller;

  // Function to find the current route based on pathname
  const findCurrentRoute = (allRoutes, pathname) => {
    for (let r of allRoutes) {
      if (r.route === pathname) return r;
      if (r.collapse) {
        const found = findCurrentRoute(r.collapse, pathname);
        if (found) return found;
      }
    }
    return null;
  };

  const route = useLocation().pathname;
  const currentRoute = findCurrentRoute(routes, route);

  useEffect(() => {
    // Setting the navbar type
    setNavbarType(fixedNavbar ? "sticky" : "static");

    // Handle transparent navbar on scroll
    const handleTransparentNavbar = () => {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    };

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  useEffect(() => {
    // Retrieve user role from token
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
      } catch (error) {
        console.error("Invalid token", error);
        setUserRole(null);
      }
    }
  }, []);

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => ({
        ...navbar(theme, { transparentNavbar, absolute, light, darkMode }),
        padding: 0,
        minHeight: 0,
      })}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
        }}
      >
        <Typography variant="h5" component="div">
          {currentRoute ? currentRoute.name : "Dashboard"} {userRole ? `- ${userRole}` : ""}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
