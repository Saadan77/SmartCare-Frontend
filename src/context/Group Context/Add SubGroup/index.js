import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSubGroups } from "services/Group/Add SubGroup/addSubGroupServices";

export const AddSubGroupContext = createContext();

export const SubGroupProvider = ({ children }) => {
  const [subGroups, setSubGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const data = await getSubGroups();
        setSubGroups(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <AddSubGroupContext.Provider value={{ subGroups, loading, error }}>
      {children}
    </AddSubGroupContext.Provider>
  );
};

SubGroupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
