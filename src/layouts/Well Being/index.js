import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import { Container, Paper, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TraumaQuestions from "./emotions/trauma/TraumaQuestions";
import ActivitySelection from "./emotions/trauma/ActivitySelection";
import ActivityDetail from "./emotions/trauma/ActivityDetail";
import TraumaImg from "../../../src/assets/images/Moods/trauma.png";
import StressImg from "../../../src/assets/images/Moods/stress.png";
import AnxietyImg from "../../../src/assets/images/Moods/anxiety.png";
import DepressedImg from "../../../src/assets/images/Moods/depressed.png";
import DisorderImg from "../../../src/assets/images/Moods/disorder.png";
import HappyImg from "../../../src/assets/images/Moods/happy.png";
import StressedQuestions from "./emotions/stressed/StressedQuestions";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    {
      name: "Traumatized",
      img: TraumaImg,
      component: <TraumaQuestions setSelectedMood={setSelectedMood} />,
      bgColor: "#F5E4EF",
    },
    {
      name: "Stressed",
      img: StressImg,
      component: <StressedQuestions setSelectedMood={setSelectedMood} />,
      bgColor: "#FCE6C9",
    },
    {
      name: "Anxious",
      img: AnxietyImg,
      component: null,
      bgColor: "#E7F5E4",
    },
    // {
    //   name: "Depressed",
    //   img: DepressedImg,
    //   component: null,
    //   bgColor: "#E4F0F5",
    // },
    // {
    //   name: "Psycho",
    //   img: DisorderImg,
    //   component: null,
    //   bgColor: "#E4F5F5",
    // },
    // {
    //   name: "Happy",
    //   img: HappyImg,
    //   component: null,
    //   bgColor: "#F5F0E4",
    // },
    {
      name: "ActivitySelection",
      component: <ActivitySelection setSelectedMood={setSelectedMood} />,
    },
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const renderActivityDetail = () => {
    if (selectedMood && selectedMood.startsWith("ActivityDetail-")) {
      const activityName = selectedMood.replace("ActivityDetail-", "");
      return <ActivityDetail selectedActivity={activityName} setSelectedMood={setSelectedMood} />;
    }
    return null;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container
        sx={{
          maxWidth: "100% !important",
          padding: "0 !important",
          margin: "0 !important",
        }}
      >
        <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }} className="h-full">
          {!selectedMood && (
            <>
              <Box>
                <Typography
                  variant="h6"
                  className="text-[#42424a] font-semibold"
                  style={{ marginBottom: "1rem" }}
                >
                  How do you feel today?
                </Typography>
              </Box>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="grid grid-cols-3 gap-4">
                    {moods.slice(0, 6).map((mood, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer text-center rounded-lg p-4"
                        style={{ backgroundColor: mood.bgColor }}
                        onClick={() => handleMoodClick(mood.name)}
                      >
                        <img
                          src={mood.img}
                          alt={mood.name}
                          className="w-24 h-32 mx-auto rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium text-gray-700">{mood.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="col-span-1">
                  <DefaultDoughnutChart
                    icon={{ color: "info", component: "leaderboard" }}
                    title="Mood Overview"
                    description="Your mood distribution"
                    chart={{
                      labels: ["Trauma", "Stress", "Anxiety", "Depression", "Psychology", "Happy"],
                      datasets: {
                        label: "Mood",
                        backgroundColors: [
                          "error",
                          "warning",
                          "info",
                          "primary",
                          "secondary",
                          "success",
                        ],
                        data: [15, 20, 15, 20, 10, 20],
                      },
                    }}
                  />
                </div>
              </div>
            </>
          )}
          {selectedMood &&
            !selectedMood.startsWith("ActivityDetail-") &&
            moods.find((m) => m.name === selectedMood)?.component}
          {renderActivityDetail()}
        </Paper>
      </Container>
    </DashboardLayout>
  );
};

export default MoodTracker;
