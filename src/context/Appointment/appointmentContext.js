import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getAppointmentByUserId,
  getUserfamilyNames,
  getDoctorNames,
} from "services/Appointment/appointmentService";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [familyNames, setFamilyNames] = useState([]);
  const [doctorNames, setDoctorNames] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointmentsAndFamilyAndDoctorNames = async () => {
      try {
        setLoading(true);
        const appointmentsData = await getAppointmentByUserId();
        const familyNamesData = await getUserfamilyNames();
        const doctorNamesData = await getDoctorNames();
        setAppointments(appointmentsData);
        setFamilyNames(familyNamesData);
        setDoctorNames(doctorNamesData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAppointmentsAndFamilyAndDoctorNames();
  }, []);

  //   const addNewClient = (newClient) => {
  //     setClients((prevClients) => [...prevClients, newClient]);
  //   };

  return (
    <AppointmentsContext.Provider
      value={{ appointments, familyNames, doctorNames, loading, error }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

AppointmentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
