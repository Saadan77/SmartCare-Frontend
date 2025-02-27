import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function useAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (role === "admin" && token === "hardcoded-admin-token") {
      setUser({ username: "admin", role: "admin", token: "hardcoded-admin-token" });
      return;
    }

    if (role === "patient" && token === "hardcoded-patient-token") {
      setUser({ username: "patient", role: "patient", token: "hardcoded-patient-token" });
      return;
    }

    if (role === "doctor" && token === "hardcoded-doctor-token") {
      setUser({ username: "doctor", role: "doctor", token: "hardcoded-doctor-token" });
      return;
    }

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
        setUser(null);
        navigate("/authentication/sign-in");
      }
    } else {
      navigate("/authentication/sign-in");
    }
  }, [navigate]);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return { user, updateUser };
}

export default useAuth;
