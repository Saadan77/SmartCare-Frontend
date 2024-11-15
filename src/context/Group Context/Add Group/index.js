import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getGroups } from "services/Group/Add Group/addGroupServices";

export const AddGroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const data = await getGroups();
        setGroups(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const addNewGroup = (newGroup) => {
    setGroups((prevGroups) => [...prevGroups, newGroup]);
  };

  return (
    <AddGroupContext.Provider value={{ groups, loading, error, addNewGroup }}>
      {children}
    </AddGroupContext.Provider>
  );
};

GroupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
