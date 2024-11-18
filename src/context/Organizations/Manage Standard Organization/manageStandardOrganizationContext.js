import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllStandardOrganizations } from "services/Organizations/Manage Standard Organization/manageStandardOrganizationService";

export const StandardOrganizationsContext = createContext();

export const StandardOrganizationsProvider = ({ children }) => {
  const [StandardOrganizations, setStandardOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandardOrganizations = async () => {
      try {
        setLoading(true);
        const data = await getAllStandardOrganizations();
        setStandardOrganizations(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchStandardOrganizations();
  }, []);

  const addNewStandardOrganization = (newStandardOrganization) => {
    setStandardOrganizations((prevStandardOrganizations) => [
      ...prevStandardOrganizations,
      newStandardOrganization,
    ]);
  };

  return (
    <StandardOrganizationsContext.Provider
      value={{
        StandardOrganizations,
        setStandardOrganizations,
        loading,
        error,
        addNewStandardOrganization,
      }}
    >
      {children}
    </StandardOrganizationsContext.Provider>
  );
};

StandardOrganizationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
