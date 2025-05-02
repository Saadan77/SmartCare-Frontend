import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getAppointmentByUserId,
  getUserfamilyNames,
} from "services/Appointment/appointmentService";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [familyNames, setFamilyNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointmentsAndFamilyNames = async () => {
      try {
        setLoading(true);
        const appointmentsData = await getAppointmentByUserId();
        const familyNamesData = await getUserfamilyNames();
        setAppointments(appointmentsData);
        setFamilyNames(familyNamesData);
        console.log("Family Names: ", familyNamesData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAppointmentsAndFamilyNames();
  }, []);

  //   const addNewClient = (newClient) => {
  //     setClients((prevClients) => [...prevClients, newClient]);
  //   };

  return (
    <AppointmentsContext.Provider
      value={{ appointments, setAppointments, familyNames, setFamilyNames, loading, error }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

AppointmentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
