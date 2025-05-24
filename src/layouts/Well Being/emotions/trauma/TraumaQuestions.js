import React, { useState } from "react";
import { Container, Paper, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import TraumaQuestion1 from "./TraumaQuestion1";
import TraumaQuestion2 from "./TraumaQuestion2";
import TraumaQuestion3 from "./TraumaQuestion3";
import TraumaQuestion4 from "./TraumaQuestion4";
import TraumaQuestion5 from "./TraumaQuestion5";
import TraumaQuestion6 from "./TraumaQuestion6";
import TraumaQuestion7 from "./TraumaQuestion7";
import TraumaQuestion8 from "./TraumaQuestion8";
import TraumaQuestion9 from "./TraumaQuestion9";
import TraumaQuestion10 from "./TraumaQuestion10";
import MDButton from "components/MDButton";

const questionComponents = [
  TraumaQuestion1,
  TraumaQuestion2,
  TraumaQuestion3,
  TraumaQuestion4,
  TraumaQuestion5,
  TraumaQuestion6,
  TraumaQuestion7,
  TraumaQuestion8,
  TraumaQuestion9,
  TraumaQuestion10,
];

const TraumaQuestions = ({ setSelectedMood }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = (selectedAnswer) => {
    if (selectedAnswer) {
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: selectedAnswer,
      }));
      if (currentIndex < questionComponents.length - 1) setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setSelectedMood(null);
    }
  };

  const CurrentQuestion = questionComponents[currentIndex];

  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        padding: "0 !important",
        margin: "0 !important",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <CurrentQuestion onNext={handleNext} selectedAnswer={answers[currentIndex] || ""} />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-4">
        <MDButton
          onClick={handleBack}
          sx={{ borderRadius: 0, minHeight: 0 }}
          variant="gradient"
          color="light"
        >
          <span className="text-xs">Back</span>
        </MDButton>
      </div>
    </Container>
  );
};

TraumaQuestions.propTypes = {
  setSelectedMood: PropTypes.isRequired,
};

export default TraumaQuestions;
