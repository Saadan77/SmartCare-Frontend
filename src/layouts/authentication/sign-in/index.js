import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";

import useAuth from "useAuth";
import { getPredictionNotificaion } from "services/Sign In/signInService";

function Basic() {
  const { updateUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") || localStorage.getItem("role")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.reload();
    }
  }, []);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "hardcoded-admin-token");
      localStorage.setItem("role", "admin");

      updateUser({ token: "hardcoded-admin-token", role: "admin", username: "admin" });
      navigate("/dashboard");
      window.location.reload();
      return;
    }

    if (username === "patient" && password === "patient") {
      localStorage.setItem("token", "hardcoded-patient-token");
      localStorage.setItem("role", "patient");

      updateUser({ token: "hardcoded-patient-token", role: "patient", username: "patient" });
      navigate("/dashboard");
      window.location.reload();
      return;
    }

    if (username === "doctor" && password === "doctor") {
      localStorage.setItem("token", "hardcoded-doctor-token");
      localStorage.setItem("role", "doctor");

      updateUser({ token: "hardcoded-doctor-token", role: "doctor", username: "doctor" });
      navigate("/dashboard");
      window.location.reload();
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
        role,
      });

      console.log("RES:", res);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("id", res.data.id);

      updateUser(res.data);

      // await axios.get("http://localhost:3000/disease-notification");
      // await axios.get("http://localhost:3000/prediction-notification");

      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      setError("Invalid credentials or incorrect role selection");
    }
  };

  return (
    <BasicLayout>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Username"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
            </MDBox>

            {/* Dropdown for selecting role */}
            <MDBox mb={2}>
              <FormControl fullWidth>
                <p className="text-xs mb-2">Select Role</p>
                <select
                  id="role-select"
                  value={role}
                  onChange={handleRoleChange}
                  className="block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="admin">Admin</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </FormControl>
            </MDBox>
            {/* 
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}

            {error && (
              <MDTypography color="error" variant="caption" display="block" textAlign="center">
                {error}
              </MDTypography>
            )}

            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Sign in
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
