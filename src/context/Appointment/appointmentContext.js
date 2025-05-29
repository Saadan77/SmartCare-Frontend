import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getAllAppointments,
  getAppointmentByUserId,
  getUserfamilyNames,
  getDoctorNames,
  createAppointmentService,
} from "services/Appointment/appointmentService";

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [allAppointments, setAllAppointments] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [familyNames, setFamilyNames] = useState([]);
  const [doctorNames, setDoctorNames] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointmentsAndFamilyAndDoctorNames = async () => {
      try {
        setLoading(true);
        const allAppointmentsData = await getAllAppointments();
        const appointmentsData = await getAppointmentByUserId();
        const familyNamesData = await getUserfamilyNames();
        const doctorNamesData = await getDoctorNames();
        setAllAppointments(allAppointmentsData);
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

  const addNewAppointment = (newAppointment) => {
    setAllAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  return (
    <AppointmentsContext.Provider
      value={{
        allAppointments,
        appointments,
        addNewAppointment,
        familyNames,
        doctorNames,
        loading,
        error,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

AppointmentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
