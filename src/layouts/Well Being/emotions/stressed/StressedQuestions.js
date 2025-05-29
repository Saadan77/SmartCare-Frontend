import React, { useState } from "react";
import { Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import StressedQuestion1 from "./StressedQuestion1";
import StressedQuestion2 from "./StressedQuestion2";
import StressedQuestion3 from "./StressedQuestion3";
import StressedQuestion4 from "./StressedQuestion4";
import StressedQuestion5 from "./StressedQuestion5";
import StressedQuestion6 from "./StressedQuestion6";
import StressedQuestion7 from "./StressedQuestion7";
import StressedQuestion8 from "./StressedQuestion8";
import StressedQuestion9 from "./StressedQuestion9";
import StressedQuestion10 from "./StressedQuestion10";
import MDButton from "components/MDButton";

const questionComponents = [
  StressedQuestion1,
  StressedQuestion2,
  StressedQuestion3,
  StressedQuestion4,
  StressedQuestion5,
  StressedQuestion6,
  StressedQuestion7,
  StressedQuestion8,
  StressedQuestion9,
  StressedQuestion10,
];

const StressedQuestions = ({ setSelectedMood }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = (selectedAnswer) => {
    if (selectedAnswer) {
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: selectedAnswer,
      }));
      if (currentIndex < questionComponents.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setSelectedMood("ActivitySelection");
      }
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
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
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
              sx={{ borderRadius: 0, minHeight: 0 }}
              variant="gradient"
              color="light"
              onClick={handleBack}
            >
              <span className="text-xs">Back</span>
            </MDButton>
          </div>
        </div>
        <div className="col-span-1">
          <iframe
            style={{ width: "500px", height: "500px" }}
            src="https://lottie.host/embed/030d3366-15d2-4f14-8214-c4d7137c1e7b/zW46EpoZWm.lottie"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

StressedQuestions.propTypes = {
  setSelectedMood: PropTypes.isRequired,
};

export default StressedQuestions;
