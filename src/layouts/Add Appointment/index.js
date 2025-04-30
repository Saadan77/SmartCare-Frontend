import React, { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  TextField,
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  useTheme,
  Chip,
} from "@mui/material";

import data from "./data";
import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

function AddAppointment() {
  const { columns, rows } = data();
  const [errors, setErrors] = useState({});

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const doctorSchedule = {
    "Dr. Ahmed Khan": { start: "09:00", end: "12:00" },
    "Dr. Ayesha Ali": { start: "10:30", end: "13:30" },
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const generateTimeSlotRanges = (start, end) => {
    const slots = [];
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    let current = new Date();
    current.setHours(startHour, startMinute, 0, 0);

    const endTime = new Date();
    endTime.setHours(endHour, endMinute, 0, 0);

    while (current < endTime) {
      const startTime = current.toTimeString().slice(0, 5);
      current.setMinutes(current.getMinutes() + 15);
      const endTimeSlot = current.toTimeString().slice(0, 5);
      if (current <= endTime) {
        slots.push(`${startTime} - ${endTimeSlot}`);
      }
    }

    return slots;
  };

  return (
    <DashboardLayout>
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
              <p className="text-base text-[#42424a] font-semibold mr-2">Add Appointment</p>
            </Typography>
          </Box>

          <Grid container sx={{ marginTop: 1 }} spacing={2} className="flex items-end">
            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs items-center">
                  Doctor:
                  <span className="text-red-600 text-base mx-2">*</span>
                </p>
                <FormControl fullWidth>
                  <Select
                    value={selectedDoctor}
                    sx={{ padding: "0.35rem !important" }}
                    onChange={(e) => {
                      const doc = e.target.value;
                      setSelectedDoctor(doc);
                      const schedule = doctorSchedule[doc];
                      if (schedule) {
                        const slots = generateTimeSlotRanges(schedule.start, schedule.end);
                        setTimeSlots(slots);
                        setSelectedTime("");
                      }
                    }}
                  >
                    {Object.keys(doctorSchedule).map((doc) => (
                      <MenuItem key={doc} value={doc}>
                        {doc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Appointment Date */}
              <Grid
                item
                xs={6}
                sm={4}
                sx={{
                  paddingTop: "5px !important",
                  paddingBottom: "5px !important",
                }}
              >
                <Box>
                  <p className="flex flex-row text-xs items-center">
                    Appointment Date:
                    <span className="text-red-600 text-base mx-2">*</span>
                  </p>
                  <DatePicker
                    class="w-64"
                    onChange={(newDate) => handleChange(newDate)}
                    renderInput={(params) => (
                      <TextField
                        name="dob"
                        required
                        value={patient.dob}
                        onChange={handleChange}
                        {...params}
                        fullWidth
                        variant="outlined"
                        error={!!errors.dob}
                        helperText={errors.dob}
                      />
                    )}
                  />
                  {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                </Box>
              </Grid>
            </LocalizationProvider>

            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs items-center">
                  Appointment Time:
                  <span className="text-red-600 text-base mx-2">*</span>
                </p>
                <FormControl fullWidth>
                  <Select
                    labelId="time-slot-label"
                    sx={{ padding: "0.35rem !important" }}
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    {timeSlots.map((slot) => (
                      <MenuItem key={slot} value={slot}>
                        {slot}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="flex flex-row text-xs items-center">
                  Patient Name:
                  <span className="text-red-600 text-base mx-2">*</span>
                </p>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    sx={{ padding: "0.75rem !important" }}
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Reason:</p>
                <TextField id="reasonStatus" variant="outlined" fullWidth />
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              sx={{
                paddingTop: "5px !important",
                paddingBottom: "5px !important",
              }}
            >
              <Box>
                <p className="text-xs mb-2">Status:</p>
                <TextField id="reasonStatus" variant="outlined" fullWidth />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 1 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Appointments</p>
            </Typography>
          </Box>

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
              >
                <button type="submit" className="text-xs">
                  SAVE
                </button>
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

export default AddAppointment;
