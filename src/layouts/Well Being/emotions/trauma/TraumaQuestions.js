import React, { useState } from "react";
import { Container } from "@mui/material";
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

import TraumaImg from "../../../../assets/images/Moods/Trauma.gif";

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
            src="https://lottie.host/embed/d3cb0e80-6263-4f6a-82ac-23e25599b0c6/tK2LndGdUZ.lottie"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

TraumaQuestions.propTypes = {
  setSelectedMood: PropTypes.isRequired,
};

export default TraumaQuestions;
