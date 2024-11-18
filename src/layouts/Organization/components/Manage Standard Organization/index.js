import React, { useState, useContext } from "react";

import data from "./data";

import { TextField, Typography, Grid, Box } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";

import { addStandardOrganization } from "services/Organizations/Manage Standard Organization/manageStandardOrganizationService";
import { StandardOrganizationsContext } from "context/Organizations/Manage Standard Organization/manageStandardOrganizationContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManageStandardOrganization() {
  const [errors, setErrors] = useState({});

  const [organizationData, setOrganizationData] = useState({
    standardOrganizationName: "",
    description: "",
    createdBy: 1,
  });

  const { addNewStandardOrganization } = useContext(StandardOrganizationsContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganizationData({
      ...organizationData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!organizationData.standardOrganizationName.trim()) {
      newErrors.standardOrganizationName = "Organization Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields."); // Show error toast
      return;
    }

    try {
      const OrganizationData = {
        Name: organizationData.standardOrganizationName,
        Description: organizationData.description,
        CreatedBy: organizationData.createdBy,
      };

      const savedOrganization = await addStandardOrganization(OrganizationData);
      addNewStandardOrganization(savedOrganization);
      toast.success("Organization added successfully");

      setOrganizationData({
        standardOrganizationName: "",
        description: "",
        createdBy: 1,
      });
    } catch (error) {
      console.error("Error creating Organization:", error.message);
      toast.error("Failed to register Organization.");
    }
  };

  const { columns, rows } = data();
  return (
    <div>
      <ToastContainer></ToastContainer>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
          Manage Standard Organization
        </Typography>
      </Box>

      <Grid container sx={{ marginTop: 1 }} spacing={2}>
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            paddingTop: "5px !important",
          }}
        >
          <p className="flex flex-row text-xs items-center">
            Standard Organization:<span className="text-red-600 text-base mx-2">*</span>
          </p>
          <TextField
            variant="outlined"
            fullWidth
            name="standardOrganizationName"
            value={organizationData.standardOrganizationName}
            onChange={handleInputChange}
            error={!!errors.standardOrganizationName}
            helperText={errors.standardOrganizationName}
          />
        </Grid>
        <Grid item xs={6} sm={6} sx={{ paddingTop: "5px !important" }}>
          <p className="text-xs mb-2">Description:</p>
          <TextField
            name="description"
            multiline
            rows={4}
            variant="outlined"
            placeholder="Specify Description"
            fullWidth
            value={organizationData.description}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item sm={12}>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={true}
            isSorted={true}
            noEndBorder
            entriesPerPage={false}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex justify-end">
        <Grid item>
          <MDButton
            variant="gradient"
            style={{
              borderRadius: 0,
              minHeight: 0,
              backgroundColor: "#1694c4",
              color: "White",
            }}
            onClick={handleSave}
          >
            SAVE
          </MDButton>
        </Grid>
        <Grid item sx={{ paddingLeft: "1px !important" }}>
          <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
            <span className="text-xs">Cancel</span>
          </MDButton>
        </Grid>
      </Grid>
    </div>
  );
}
