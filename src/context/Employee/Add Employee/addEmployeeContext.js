import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllEmployees } from "services/Employee/Add Employee/addEmployeeService";

export const AddEmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [Employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchEmployees = async () => {
  //       try {
  //         setLoading(true);
  //         const data = await getAllEmployees();
  //         setEmployees(data);
  //         setLoading(false);
  //       } catch (err) {
  //         setError(err);
  //         setLoading(false);
  //       }
  //     };

  //     fetchEmployees();
  //   }, []);

  const addNewEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <AddEmployeeContext.Provider
      value={{ Employees, setEmployees, loading, error, addNewEmployee }}
    >
      {children}
    </AddEmployeeContext.Provider>
  );
};

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
