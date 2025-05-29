import React, { useState } from "react";
import { Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import AnxiousQuestion1 from "./AnxiousQuestion1";
import AnxiousQuestion2 from "./AnxiousQuestion2";
import AnxiousQuestion3 from "./AnxiousQuestion3";
import AnxiousQuestion4 from "./AnxiousQuestion4";
import AnxiousQuestion5 from "./AnxiousQuestion5";
import AnxiousQuestion6 from "./AnxiousQuestion6";
import AnxiousQuestion7 from "./AnxiousQuestion7";
import AnxiousQuestion8 from "./AnxiousQuestion8";
import AnxiousQuestion9 from "./AnxiousQuestion9";
import AnxiousQuestion10 from "./AnxiousQuestion10";
import MDButton from "components/MDButton";

const questionComponents = [
  AnxiousQuestion1,
  AnxiousQuestion2,
  AnxiousQuestion3,
  AnxiousQuestion4,
  AnxiousQuestion5,
  AnxiousQuestion6,
  AnxiousQuestion7,
  AnxiousQuestion8,
  AnxiousQuestion9,
  AnxiousQuestion10,
];

const AnxiousQuestions = ({ setSelectedMood }) => {
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

AnxiousQuestions.propTypes = {
  setSelectedMood: PropTypes.isRequired,
};

export default AnxiousQuestions;
