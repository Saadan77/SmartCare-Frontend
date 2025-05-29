import React, { useState, useContext } from "react";

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
  MenuItem,
  Select,
  FormControl,
  useTheme,
  Chip,
} from "@mui/material";

import data from "./data";
import DataTable from "examples/Tables/DataTable";

import MDButton from "components/MDButton";

import { AppointmentsContext } from "context/Appointment/appointmentContext";
import { createAppointmentService } from "services/Appointment/appointmentService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

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

  const [appointmentData, setAppointmentData] = useState({
    id: localStorage.getItem("id") || "",
    family_member_id: "",
    doctor_id: "",
    appointment_date: "",
    reason: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({
      ...prev,
      [name]: name === "appointment_date" ? (value ? value.toISOString() : "") : value,
    }));
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const formattedAppointmentDate = appointmentData.appointment_date
    ? dayjs(appointmentData.appointment_date).format("YYYY-MM-DD")
    : "";

  const { addNewAppointment, allAppointments, familyNames, doctorNames } =
    useContext(AppointmentsContext);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const newErrors = {};
      if (!appointmentData.family_member_id)
        newErrors.family_member_id = "Patient name is required";
      if (!selectedDoctor) newErrors.doctor_id = "Doctor is required";
      if (!appointmentData.appointment_date)
        newErrors.appointment_date = "Appointment date is required";
      if (!selectedTime) newErrors.appointment_time = "Appointment time is required";
      if (!appointmentData.status) newErrors.status = "Status is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        toast.error("Please fill all required fields");
        return;
      }

      const selectedDoctorData = doctorNames.find((doc) => doc.doctor_name === selectedDoctor);
      if (!selectedDoctorData || !selectedDoctorData.doctor_id) {
        throw new Error("Invalid doctor selection: Doctor ID not found");
      }
      const doctorId = selectedDoctorData.doctor_id;

      const selectedFamilyMember = familyNames.find((member) => member.full_name === personName[0]);
      if (!selectedFamilyMember || !selectedFamilyMember.family_member_id) {
        throw new Error("Invalid family member selection: Family Member ID not found");
      }
      const familyMemberId = selectedFamilyMember.family_member_id;

      const [startTime] = selectedTime.split(" - ");
      const formattedTime = `${startTime}:00`;

      const enteredAppointmentData = {
        id: localStorage.getItem("id"),
        family_member_id: familyMemberId,
        doctor_id: doctorId,
        appointment_date: dayjs(appointmentData.appointment_date).format("YYYY-MM-DD"),
        appointment_time: formattedTime,
        reason: appointmentData.reason || "Not specified",
        status: appointmentData.status,
      };

      const saveAppointment = await createAppointmentService(enteredAppointmentData);
      console.log("New Appointment Data:", saveAppointment);
      if (saveAppointment) {
        addNewAppointment(saveAppointment);
        toast.success("New appointment added");

        setAppointmentData({
          id: localStorage.getItem("id") || "",
          family_member_id: "",
          doctor_id: "",
          appointment_date: "",
          reason: "",
          status: "",
        });
        setSelectedDoctor("");
        setSelectedTime("");
        setTimeSlots([]);
        setPersonName([]);
      } else {
        throw new Error("No data returned from API");
      }
    } catch (error) {
      toast.error("Failed to create appointment: " + (error.response?.data || error.message));
    }
  };

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

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const selected = typeof value === "string" ? value.split(",") : value;
    setPersonName(selected.length > 1 ? [selected[selected.length - 1]] : selected);
    setAppointmentData({
      ...appointmentData,
      family_member_id: selected.length > 0 ? selected[selected.length - 1] : "",
    });
  };

  const generateTimeSlotRanges = (start, end) => {
    const slots = [];
    const startTime = dayjs(start, "HH:mm").tz("Asia/Karachi");
    const endTime = dayjs(end, "HH:mm").tz("Asia/Karachi");

    let current = startTime;
    while (current < endTime) {
      const slotStart = current.format("HH:mm");
      const slotEnd = current.add(15, "minute").format("HH:mm");
      slots.push(`${slotStart} - ${slotEnd}`);
      current = current.add(15, "minute");
    }

    console.log("Generated Time Slots:", slots);
    return slots;
  };

  const getBookedTimeSlots = () => {
    if (!appointmentData.appointment_date || !selectedDoctor) {
      console.log("Missing appointment date or doctor selection");
      return [];
    }

    const selectedDate = dayjs(appointmentData.appointment_date).format("YYYY-MM-DD");
    const selectedDoctorData = doctorNames.find((doc) => doc.doctor_name === selectedDoctor);
    if (!selectedDoctorData) {
      console.log("No doctor data found for:", selectedDoctor);
      return [];
    }

    console.log("Selected Date:", selectedDate);
    console.log("Selected Doctor ID:", selectedDoctorData.doctor_id);
    console.log("All Appointments:", allAppointments);

    const bookedSlots = allAppointments
      .filter((appointment) => {
        const appointmentDate = dayjs(appointment.appointment_date).format("YYYY-MM-DD");
        const isMatch =
          appointmentDate === selectedDate &&
          appointment.doctor_id.toString() === selectedDoctorData.doctor_id.toString() &&
          appointment.status !== "Cancelled";
        console.log(
          `Appointment: ${appointment.appointment_date}, Doctor ID: ${appointment.doctor_id}, Time: ${appointment.appointment_time}, Status: ${appointment.status}, Match: ${isMatch}`
        );
        return isMatch;
      })
      .map((appointment) => {
        let timeString = appointment.appointment_time;
        if (!timeString || typeof timeString !== "string") {
          console.warn("Invalid appointment_time, using fallback: 00:00", appointment);
          timeString = "00:00:00";
        } else if (timeString.length === 5) {
          timeString = `${timeString}:00`;
        }
        const startTime = dayjs(timeString, "HH:mm:ss").format("HH:mm");
        const endTime = dayjs(timeString, "HH:mm:ss").add(15, "minute").format("HH:mm");
        const slot = `${startTime} - ${endTime}`;
        console.log("Generated Booked Slot:", slot);
        return slot;
      });

    console.log("Booked Time Slots:", bookedSlots);
    return bookedSlots;
  };

  const bookedTimeSlots = getBookedTimeSlots();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ToastContainer />
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
                <FormControl fullWidth error={!!errors.doctor_id}>
                  <Select
                    value={selectedDoctor}
                    sx={{ padding: "0.35rem !important" }}
                    onChange={(e) => {
                      const selectedName = e.target.value;
                      setSelectedDoctor(selectedName);

                      const selectedDoctorData = doctorNames.find(
                        (doc) => doc.doctor_name === selectedName
                      );
                      if (selectedDoctorData) {
                        const start = selectedDoctorData.start_time;
                        const end = selectedDoctorData.end_time;
                        const slots = generateTimeSlotRanges(start, end);
                        setTimeSlots(slots);
                        setSelectedTime("");
                        setAppointmentData((prev) => ({
                          ...prev,
                          doctor_id: selectedDoctorData.doctor_id,
                        }));
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          doctor_id: "",
                        }));
                      } else {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          doctor_id: "Doctor not found in list",
                        }));
                      }
                    }}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select a doctor
                    </MenuItem>
                    {doctorNames.length > 0 ? (
                      doctorNames.map((doc) => (
                        <MenuItem key={doc.doctor_id || doc.doctor_name} value={doc.doctor_name}>
                          {doc.doctor_name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value="" disabled>
                        No doctors available
                      </MenuItem>
                    )}
                  </Select>
                  {errors.doctor_id && (
                    <p className="text-red-500 text-xs mt-1">{errors.doctor_id}</p>
                  )}
                </FormControl>
              </Box>
            </Grid>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    className="w-64"
                    minDate={dayjs()}
                    value={
                      appointmentData.appointment_date
                        ? dayjs(appointmentData.appointment_date)
                        : null
                    }
                    onChange={(newValue) => {
                      const formattedDate = newValue ? newValue.toISOString() : "";
                      setAppointmentData({
                        ...appointmentData,
                        appointment_date: formattedDate,
                      });
                      setSelectedTime("");
                      if (formattedDate) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          appointment_date: "",
                        }));
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        required
                        {...params}
                        fullWidth
                        variant="outlined"
                        value={formattedAppointmentDate}
                        error={!!errors.appointment_date}
                        helperText={errors.appointment_date}
                      />
                    )}
                  />
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
                <FormControl fullWidth error={!!errors.appointment_time}>
                  <Select
                    labelId="time-slot-label"
                    sx={{ padding: "0.35rem !important" }}
                    value={selectedTime}
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        appointment_time: "",
                      }));
                    }}
                    disabled={!appointmentData.appointment_date || !selectedDoctor}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select a time slot
                    </MenuItem>
                    {timeSlots.map((slot) => (
                      <MenuItem
                        key={slot}
                        value={slot}
                        disabled={bookedTimeSlots.includes(slot)}
                        sx={{
                          color: bookedTimeSlots.includes(slot) ? "gray" : "inherit",
                          backgroundColor: bookedTimeSlots.includes(slot) ? "#f0f0f0" : "inherit",
                        }}
                      >
                        {slot}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.appointment_time && (
                    <p className="text-red-500 text-xs mt-1">{errors.appointment_time}</p>
                  )}
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
                <FormControl fullWidth error={!!errors.family_member_id}>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    sx={{ padding: "0.75rem !important" }}
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
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select a patient
                    </MenuItem>
                    {familyNames.map((member) => (
                      <MenuItem
                        key={member.family_member_id}
                        value={member.full_name}
                        style={getStyles(member.full_name, personName, theme)}
                      >
                        {member.full_name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.family_member_id && (
                    <p className="text-red-500 text-xs mt-1">{errors.family_member_id}</p>
                  )}
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
                <TextField
                  id="reasonStatus"
                  variant="outlined"
                  fullWidth
                  name="reason"
                  value={appointmentData.reason}
                  onChange={handleInputChange}
                />
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
                <FormControl fullWidth error={!!errors.status}>
                  <Select
                    sx={{ padding: "0.5rem !important" }}
                    value={appointmentData.status}
                    onChange={(e) => {
                      handleInputChange(e);
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        status: "",
                      }));
                    }}
                    displayEmpty
                    name="status"
                  >
                    <MenuItem value="" disabled>
                      Select a status
                    </MenuItem>
                    <MenuItem value="Scheduled">Scheduled</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                  {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 1 }}>
            <Typography style={{ fontWeight: "bold" }} gutterBottom>
              <p className="text-base text-[#42424a] font-semibold mr-2">Appointments</p>
            </Typography>
          </Box>

          <Grid container spacing={2}>
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
                <button onClick={handleSave} type="submit" className="text-xs">
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
