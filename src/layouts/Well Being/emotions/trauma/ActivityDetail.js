import React from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import MDButton from "components/MDButton";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbArrowBigRightLines,
} from "react-icons/tb";

const activitiesDetails = {
  "Brisk Walking (20–30 Minutes)": {
    purpose: "Reduce anxiety and elevate mood through movement.",
    howTo: "Go for a 20–30 minute walk outdoors at a moderate pace.",
    whyWorks: "Physical movement helps lower cortisol (stress hormone) and boosts endorphins.",
    bonus: "Sunlight exposure improves vitamin D levels, which supports emotional stability.",
    image: "https://lottie.host/embed/8ad7945a-2d21-467f-8345-f780cbc60794/bTDFz9S8Zr.lottie",
  },
  "Box Breathing (4–4–4–4 Technique)": {
    purpose: "Calm your nervous system and regain focus.",
    howTo:
      "Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat for 3–5 minutes.",
    whyWorks: "Activates the parasympathetic nervous system, reducing anxiety and panic.",
    image: "https://via.placeholder.com/300?text=Box+Breathing",
  },
  "Gratitude Journaling (3 Positive Things)": {
    purpose: "Rewire your brain to focus on positive experiences.",
    howTo: "Write down three things you're grateful for at the end of each day.",
    whyWorks: "Increases dopamine and serotonin, countering negative thinking loops.",
    image: "https://via.placeholder.com/300?text=Gratitude+Journaling",
  },
  "Progressive Muscle Relaxation (PMR)": {
    purpose: "Release built-up physical tension caused by anxiety or trauma.",
    howTo:
      "Sit or lie down in a quiet place. Tense each muscle group for 5 seconds, then relax (toes → legs → arms → face).",
    whyWorks: "Relieves somatic symptoms of anxiety and improves sleep.",
    image: "https://via.placeholder.com/300?text=Progressive+Muscle+Relaxation",
  },
  "Pleasant Activity Scheduling": {
    purpose: "Reintroduce joy and routine to break the cycle of avoidance or apathy.",
    howTo:
      "Schedule one enjoyable activity per day (e.g., painting, listening to music, cooking, meeting a friend).",
    whyWorks: "Behavioral activation helps rebuild positive reinforcement loops in the brain.",
    image: "https://via.placeholder.com/300?text=Pleasant+Activity+Scheduling",
  },
};

const ActivityDetail = ({ selectedActivity, setSelectedMood }) => {
  const activity = activitiesDetails[selectedActivity];

  if (!activity) return null;

  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        padding: "0 !important",
        margin: "0 !important",
      }}
    >
      <Box>
        <Typography variant="h6" className="text-[#42424a] font-semibold mb-4">
          {selectedActivity}
        </Typography>
      </Box>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 p-4">
          <div className="mb-6">
            <div className="flex gap-2 items-center">
              <TbCircleNumber1Filled />
              <Typography variant="h6" className="text-gray-700 font-semibold mb-2">
                Purpose
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <TbArrowBigRightLines />
              <Typography variant="body2">{activity.purpose}</Typography>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex gap-2 items-center">
              <TbCircleNumber2Filled />
              <Typography variant="h6" className="text-gray-700 font-semibold mb-2">
                How to Do It
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <TbArrowBigRightLines />
              <Typography variant="body2">{activity.howTo}</Typography>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex gap-2 items-center">
              <TbCircleNumber3Filled />
              <Typography variant="h6" className="text-gray-700 font-semibold mb-2">
                Why It Works
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <TbArrowBigRightLines />
              <Typography variant="body2">{activity.whyWorks}</Typography>
            </div>
          </div>
          {activity.bonus && (
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <TbCircleNumber4Filled />
                <Typography variant="h6" className="text-gray-700 font-semibold mb-2">
                  Bonus
                </Typography>
              </div>
              <div className="flex gap-2 items-center">
                <TbArrowBigRightLines />
                <Typography variant="body2">{activity.bonus}</Typography>
              </div>
            </div>
          )}
          <MDButton
            variant="gradient"
            style={{
              borderRadius: 0,
              minHeight: 0,
              backgroundColor: "#1694c4",
              color: "White",
              marginTop: "1rem",
            }}
            onClick={() => setSelectedMood(null)}
          >
            <button type="submit" className="text-xs">
              Submit
            </button>
          </MDButton>
        </div>
        <div className="col-span-1 p-4 flex items-center justify-center rounded-lg shadow-md">
          <iframe style={{ width: "100%", height: "300px" }} src={activity.image}></iframe>
        </div>
      </div>
    </Container>
  );
};

ActivityDetail.propTypes = {
  selectedActivity: PropTypes.isRequired,
  setSelectedMood: PropTypes.isRequired,
};

export default ActivityDetail;
