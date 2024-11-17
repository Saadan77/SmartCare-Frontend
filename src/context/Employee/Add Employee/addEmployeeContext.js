import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AddEmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [Employees, setEmployees] = useState([]);

  const addNewEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <AddEmployeeContext.Provider value={{ Employees, setEmployees, addNewEmployee }}>
      {children}
    </AddEmployeeContext.Provider>
  );
};

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
