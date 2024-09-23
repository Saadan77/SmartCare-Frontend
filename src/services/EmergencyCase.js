import axios from "axios";

async function fetchEmergencyCases(token) {
  const data = JSON.stringify({
    collection: "emergencyCase",
    database: "ER",
    dataSource: "ERMS",
    projection: {
      patientId: 1,
      fullName: 1,
      treatment: 1,
      diagnosis: 1,
      recoveryStatus: 1,
      room: 1,
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
    throw new Error(`Error emergency data: ${error.message}`);
  }
}

async function createEmergencyCase(emergencyCaseData, token) {
  try {
    await axios.post(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yqqjxmm/endpoint/data/v1/action/insertOne",
      {
        collection: "emergencyCase",
        database: "ER",
        dataSource: "ERMS",
        document: emergencyCaseData,
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
    console.error("Error creating emergency case:", error);
    throw new Error("Failed to create emergency case.");
  }
}

export { fetchEmergencyCases, createEmergencyCase };
