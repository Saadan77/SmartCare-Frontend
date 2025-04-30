import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAppointments } from "services/Appointment/appointmentService";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const data = await getAppointments();
        setAppointments(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  //   const addNewClient = (newClient) => {
  //     setClients((prevClients) => [...prevClients, newClient]);
  //   };

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments, loading, error }}>
      {/* <AppointmentsContext.Provider value={{ clients, setClients, loading, error, addNewClient }}> */}
      {children}
    </AppointmentsContext.Provider>
  );
};

AppointmentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
