import React, { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { TextField, Container, Typography, Grid, Paper, Box } from "@mui/material";

import data from "./data";
import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";

import { addClient } from "services/Add Client/addClientServices";
import { AddClientContext } from "context/Add Client/addClientContext";

function AddClient() {
  const { columns, rows } = data();
  const { addNewClient } = useContext(AddClientContext);

  const [errors, setErrors] = useState({});

  const [client, setClient] = useState({
    name: "",
    theme: "Light Theme",
    adminUser: "",
    adminPassword: "",
    dbUser: "",
    dbPassword: "",
    createdBy: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setClient({
      ...client,
      [name]: value,
    });

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    if (name === "name") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setErrors({ ...errors, name: "Only alphabets are allowed" });
      } else {
        setErrors({ ...errors, name: "" });
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const clientData = {
        name: client.name,
        theme: client.theme,
        adminUser: client.adminUser,
        adminPassword: client.adminPassword,
        dbUser: client.dbUser,
        dbPassword: client.dbPassword,
        createdBy: client.createdBy,
      };

      const savedClient = await addClient(clientData);
      addNewClient(savedClient);
      toast.success("Client added successfully");

      setClient({
        name: "",
        theme: "Light Theme",
        adminUser: "",
        adminPassword: "",
        dbUser: "",
        dbPassword: "",
        createdBy: 1,
      });
    } catch (error) {
      console.error("Add Client: Error creating client:", error.message);
      toast.error("Failed to register client.");
    }
  };

  return (
    <DashboardLayout>
      <ToastContainer />
      <DashboardNavbar />
      <Container
        sx={{
          maxWidth: "100% !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          marginLeft: "0 !important",
          marginRight: "0 !important",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 2, marginTop: 3, position: "relative" }}
          className="h-full"
        >
          <Box>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Add Client</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Name:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  required
                  value={client.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <div>
                {/* Label */}
                <p htmlFor="Theme" className="text-xs mb-2">
                  Theme:
                </p>

                {/* Select Menu */}
                <select
                  id="Theme"
                  name="theme"
                  value={client.theme}
                  onChange={handleInputChange}
                  className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="Light Theme">Light Theme</option>
                  <option value="Dark Theme">Dark Theme</option>
                </select>
              </div>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Admin User:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="adminUser"
                  onChange={handleInputChange}
                  value={client.adminUser}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Admin Password:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="adminPassword"
                  onChange={handleInputChange}
                  value={client.adminPassword}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">DBUser:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="dbUser"
                  onChange={handleInputChange}
                  value={client.dbUser}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">DBPassword:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="dbPassword"
                  onChange={handleInputChange}
                  value={client.dbPassword}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Logo:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="file"
                  inputProps={{ accept: "image/*" }}
                />
              </Box>
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
                Save
              </MDButton>
            </Grid>

            <Grid item sx={{ paddingLeft: "1px !important" }}>
              <MDButton sx={{ borderRadius: 0, minHeight: 0 }} variant="gradient" color="light">
                <span className="text-xs">Cancel</span>
              </MDButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default AddClient;
