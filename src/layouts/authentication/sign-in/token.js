import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
};

// Define prop types
TokenProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate the children prop
};

export const useToken = () => useContext(TokenContext);
