import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import { Container, Paper, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TraumaQuestions from "./emotions/trauma/TraumaQuestions";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    { name: "Trauma", component: <TraumaQuestions setSelectedMood={setSelectedMood} /> },
    { name: "Stress", component: null },
    { name: "Anxiety", component: null },
    { name: "Depression", component: null },
    { name: "Psychology", component: null },
    { name: "Happy", component: null },
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
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
                <Typography variant="h6" className="text-[#42424a] font-semibold mb-4">
                  How do you feel today?
                </Typography>
              </Box>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="grid grid-cols-2 gap-4">
                    {moods.map((mood, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer text-center"
                        onClick={() => handleMoodClick(mood.name)}
                      >
                        <img
                          src={`https://via.placeholder.com/100?text=${mood.name}`}
                          alt={mood.name}
                          className="w-24 h-24 mx-auto rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">{mood.name}</p>
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
          {selectedMood && moods.find((m) => m.name === selectedMood)?.component}
        </Paper>
      </Container>
    </DashboardLayout>
  );
};

export default MoodTracker;
