import React, { useState, useEffect } from "react";
import { Typography, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import PropTypes from "prop-types";
import MDButton from "components/MDButton";

const TraumaQuestion6 = ({ onNext, selectedAnswer: initialAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(initialAnswer);

  useEffect(() => {
    setSelectedAnswer(initialAnswer);
  }, [initialAnswer]);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <>
      <Typography variant="h6" className="text-[#42424a] font-semibold mb-4">
        Have you experienced intense emotional reactions to reminders of trauma?
      </Typography>
      <fieldset className="space-y-3">
        <div>
          <label
            htmlFor="Yes"
            className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
          >
            <p className="text-gray-700">Yes</p>

            <input
              type="radio"
              name="TraumaQuestion1"
              value="Yes"
              id="Yes"
              className="size-5 border-gray-300"
              checked={selectedAnswer === "Yes"}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="No"
            className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
          >
            <p className="text-gray-700">No</p>

            <input
              type="radio"
              name="TraumaQuestion1"
              value="No"
              id="No"
              className="size-5 border-gray-300"
              checked={selectedAnswer === "No"}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="Sometimes"
            className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
          >
            <p className="text-gray-700">Sometimes</p>

            <input
              type="radio"
              name="TraumaQuestion1"
              value="Sometimes"
              id="Sometimes"
              className="size-5 border-gray-300"
              checked={selectedAnswer === "Sometimes"}
              onChange={handleChange}
            />
          </label>
        </div>
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
        onClick={() => onNext(selectedAnswer)}
        disabled={!selectedAnswer}
      >
        <button type="submit" className="text-xs">
          NEXT
        </button>
      </MDButton>
    </>
  );
};

TraumaQuestion6.propTypes = {
  onNext: PropTypes.isRequired,
  selectedAnswer: PropTypes.isRequired,
};

export default TraumaQuestion6;
