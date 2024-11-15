import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getServices } from "services/Group/Add Service/addServiceServices";

export const AddServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <AddServiceContext.Provider value={{ services, loading, error }}>
      {children}
    </AddServiceContext.Provider>
  );
};

ServiceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
