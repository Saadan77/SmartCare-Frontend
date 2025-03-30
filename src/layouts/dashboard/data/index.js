import React, { useState, useEffect } from "react";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import axios from "axios";

export default function diseasesData() {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/data")
      .then((response) => {
        setDiseases(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const columns = [
    { Header: "Disease Name", accessor: "DiseaseName", width: "20%", align: "left" },
    { Header: "AJK", accessor: "ajk", width: "15%", align: "center" },
    { Header: "Sindh", accessor: "sindh", width: "15%", align: "center" },
    { Header: "Punjab", accessor: "punjab", width: "15%", align: "center" },
    { Header: "Balochistan", accessor: "balochistan", width: "15%", align: "center" },
    { Header: "Total Cases", accessor: "TotalCases", width: "20%", align: "right" },
  ];

  const rows = diseases.map((disease) => ({
    DiseaseName: (
      <MDTypography variant="caption" fontWeight="medium">
        {disease["Diseases"]}
      </MDTypography>
    ),
    ajk: (
      <MDTypography variant="caption" fontWeight="medium">
        {disease["AJK"]}
      </MDTypography>
    ),
    sindh: (
      <MDTypography variant="caption" fontWeight="medium">
        {disease["Sindh"]}
      </MDTypography>
    ),
    punjab: (
      <MDTypography variant="caption" fontWeight="medium">
        {disease["Punjab"]}
      </MDTypography>
    ),
    balochistan: (
      <MDTypography variant="caption" fontWeight="medium">
        {disease["Balochistan"]}
      </MDTypography>
    ),
    TotalCases: (
      <MDTypography variant="caption" fontWeight="medium">
        {disease["Total"]}
      </MDTypography>
    ),
  }));

  return { columns, rows };
}
