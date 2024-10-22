import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const PatientContext = createContext();

export const usePatientContext = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [newPatientId, setNewPatientId] = useState(null);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const today = formatDate(new Date());

  const getPatientCountForToday = (patients) => {
    return patients.filter((patient) => {
      const registrationDate = new Date(patient.createdDate);
      return formatDate(registrationDate) === today;
    }).length;
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = JSON.stringify({
          collection: "Patients",
          database: "ER",
          dataSource: "ERMS",
          projection: {
            patientId: 1,
            fullName: 1,
            gender: 1,
            phoneNo: 1,
            createdDate: 1,
          },
        });

        const config = {
          method: "post",
          url: "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yqqjxmm/endpoint/data/v1/action/find",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: data,
        };

        const response = await axios(config);
        setPatients(response.data.documents);

        const count = getPatientCountForToday(response.data.documents || []);
        const newId = `${(count + 1).toString().padStart(5, "0")}-${today}`;
        setNewPatientId(newId);
      } catch (error) {
        console.error(`Error fetching patient data: ${error.message}`);
      }
    };

    fetchPatients();
  }, [token]);

  return (
    <PatientContext.Provider value={{ patients, newPatientId, setPatients }}>
      {children}
    </PatientContext.Provider>
  );
};

async function createPatient(patientData, token) {
  try {
    await axios.post(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yqqjxmm/endpoint/data/v1/action/insertOne",
      {
        collection: "Patients",
        database: "ER",
        dataSource: "ERMS",
        document: patientData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Error creating patient:", error);
    throw new Error("Failed to create patient.");
  }
}

async function deletePatient(patientId, token) {
  try {
    const response = await axios.post(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yqqjxmm/endpoint/data/v1/action/deleteOne",
      {
        collection: "Patients",
        database: "ER",
        dataSource: "ERMS",
        filter: { patientId: patientId },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting patient:", error);
    throw new Error("Failed to delete patient.");
  }
}

PatientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { createPatient, deletePatient };
