import axios from "axios";

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

export { createEmergencyCase };
