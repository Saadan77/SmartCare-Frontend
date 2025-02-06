import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function useAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user data from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    } else if (!token) {
      navigate("/authhentication/sign-in");
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return { user, updateUser };
}

export default useAuth;
