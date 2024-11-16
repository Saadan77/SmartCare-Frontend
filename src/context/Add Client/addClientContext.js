import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllClients } from "services/Add Client/addClientServices";

export const AddClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await getAllClients();
        setClients(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const addNewClient = (newClient) => {
    setClients((prevClients) => [...prevClients, newClient]);
  };

  return (
    <AddClientContext.Provider value={{ clients, setClients, loading, error, addNewClient }}>
      {children}
    </AddClientContext.Provider>
  );
};

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
