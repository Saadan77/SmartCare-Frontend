import axios from "axios";

async function fetchPatients(token) {
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
      registrationDate: 1,
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

  try {
    const response = await axios(config);
    return response.data.documents;
  } catch (error) {
    throw new Error(`Error patients data: ${error.message}`);
  }
}

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

export { createPatient, fetchPatients };
