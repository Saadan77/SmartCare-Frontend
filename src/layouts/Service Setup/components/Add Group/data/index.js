// @mui material components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import axios from "axios";

import React, { useContext } from "react";
import { AddGroupContext } from "context/Group Context/Add Group";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function data() {
  <ToastContainer />;
  const { groups, setGroups } = useContext(AddGroupContext);

  const handleDelete = async (groupId) => {
    try {
      await axios.delete(`http://localhost:3001/api/services/addGroup/${groupId}`);
      setGroups((prevGroups) => prevGroups.filter((group) => group.GroupId !== groupId));
      toast.success("Group deleted successfully");
    } catch (error) {
      console.error("Error deleting group:", error);
      toast.error("Error deleting group");
    }
  };

  const columns = [
    { Header: "Group Name", accessor: "groupName", width: "40%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "left" },
    { Header: "View", accessor: "view", width: "20%", align: "left" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "left" },
  ];

  const rows = groups.map((group) => ({
    groupName: (
      <MDTypography variant="caption" fontWeight="medium">
        {group["GroupName"]}
      </MDTypography>
    ),
    edit: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        Edit
      </MDButton>
    ),
    view: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
      >
        View
      </MDButton>
    ),
    delete: (
      <MDButton
        variant="gradient"
        fontWeight="medium"
        style={{ borderRadius: 0, minHeight: 0, backgroundColor: "#1694c4", color: "White" }}
        onClick={() => handleDelete(group.GroupId)}
      >
        Delete
      </MDButton>
    ),
  }));

  return { columns, rows };
}
