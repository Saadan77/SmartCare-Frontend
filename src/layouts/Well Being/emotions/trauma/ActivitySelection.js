import React, { useState } from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import MDButton from "components/MDButton";

const ActivitySelection = ({ setSelectedMood }) => {
  const [selectedActivity, setSelectedActivity] = useState("");

  const activities = [
    "Brisk Walking (20–30 Minutes)",
    "Box Breathing (4–4–4–4 Technique)",
    "Gratitude Journaling (3 Positive Things)",
    "Progressive Muscle Relaxation (PMR)",
    "Pleasant Activity Scheduling",
  ];

  const handleChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  const handleProceed = () => {
    if (selectedActivity) {
      setSelectedMood(`ActivityDetail-${selectedActivity}`);
    }
  };

  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        padding: "0 !important",
        margin: "0 !important",
      }}
    >
      <Box>
        <Typography variant="h6">Select an activity to help manage your mood:</Typography>
      </Box>
      <fieldset className="space-y-3">
        <legend className="sr-only">Activity</legend>
        {activities.map((activity, index) => (
          <div key={index}>
            <label
              htmlFor={activity}
              className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
            >
              <p className="text-gray-700">{activity}</p>
              <input
                type="radio"
                name="ActivitySelection"
                value={activity}
                id={activity}
                className="size-5 border-gray-300"
                checked={selectedActivity === activity}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </fieldset>
      <MDButton
        variant="gradient"
        style={{
          borderRadius: 0,
          minHeight: 0,
          backgroundColor: "#1694c4",
          color: "White",
          marginTop: "1rem",
        }}
        onClick={handleProceed}
        disabled={!selectedActivity}
      >
        <button type="submit" className="text-xs">
          NEXT
        </button>
      </MDButton>
    </Container>
  );
};

ActivitySelection.propTypes = {
  setSelectedMood: PropTypes.isRequired,
};

export default ActivitySelection;
