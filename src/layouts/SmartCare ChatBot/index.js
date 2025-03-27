import React, { useState } from "react";
import { Box, Container, Paper, TextField, Grid, CircularProgress, Avatar } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const API_URL = "https://a87f-34-141-221-219.ngrok-free.app/qa";

const ChatMessage = ({ text, isUser }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      mb: 3,
      justifyContent: isUser ? "flex-end" : "flex-start",
    }}
  >
    {!isUser && (
      <Avatar
        sx={{
          bgcolor: "#00C4B4",
          mr: 1.5,
          width: 40,
          height: 40,
        }}
      >
        <SmartToyIcon sx={{ fontSize: "1.5rem", color: "#ffffff" }} />
      </Avatar>
    )}
    <Paper
      elevation={0}
      sx={{
        p: 2,
        maxWidth: "70%",
        bgcolor: isUser ? "#1976d2" : "#e0f7fa",
        color: isUser ? "white !important" : "black",
        borderRadius: isUser ? "20px 20px 0 20px" : "20px 20px 20px 0",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      <p className="text-sm leading-relaxed">
        <ReactMarkdown>{text}</ReactMarkdown>
      </p>
    </Paper>
    {isUser && (
      <Avatar
        sx={{
          bgcolor: "#1976d2",
          ml: 1.5,
          width: 40,
          height: 40,
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        U
      </Avatar>
    )}
  </Box>
);

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) throw new Error("Server Error");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      let botMessage = { text: "", isUser: false };
      setMessages([...newMessages, botMessage]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        botMessage.text += decoder.decode(value, { stream: true });
        setMessages([...newMessages, botMessage]); // Update messages dynamically
      }
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "Error fetching response. Please try again.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container sx={{ maxWidth: "100% !important", px: 0, mx: 0 }}>
        {/* Main Chat Area */}
        <Paper
          elevation={3}
          sx={{
            p: 4, // Increased padding for a more spacious feel
            mt: 3,
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#f8fafc", // Light gray-blue background for a clean look
            borderRadius: "20px", // More rounded corners
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)", // Softer, larger shadow
          }}
        >
          {/* Chat Messages */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              p: 3,
              borderRadius: "16px",
              bgcolor: "#ffffff", // White background for chat area
              boxShadow: "inset 0 0 8px rgba(0,0,0,0.05)", // Subtle inset shadow
            }}
          >
            {messages.map((msg, index) => (
              <ChatMessage key={index} text={msg.text} isUser={msg.isUser} />
            ))}
            {loading && (
              <CircularProgress
                size={28}
                sx={{ display: "block", mx: "auto", my: 3, color: "#00C4B4" }}
              />
            )}
          </Box>

          {/* Input Field & Send Button */}
          <Grid container spacing={2} alignItems="center" sx={{ mt: 3 }}>
            <Grid item xs={9.5}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px", // More rounded input
                    bgcolor: "#f1f5f9", // Light gray background
                    fontSize: "1rem",
                    "&:hover fieldset": { borderColor: "#00C4B4" }, // Cyan border on hover
                    "&.Mui-focused fieldset": { borderColor: "#00C4B4" }, // Cyan border on focus
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)", // Subtle shadow
                  },
                  "& .MuiInputBase-input": {
                    py: 1.5, // Taller input for better UX
                  },
                }}
              />
            </Grid>
            <Grid item xs={2.5}>
              <MDButton
                fullWidth
                variant="gradient"
                color="info"
                onClick={handleSend}
                disabled={loading}
                sx={{
                  borderRadius: "16px", // Rounded button
                  py: 1.5, // Taller button
                  fontSize: "1rem",
                  fontWeight: "medium",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Subtle shadow
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)", // Stronger shadow on hover
                  },
                }}
              >
                {loading ? "..." : "Send"}
              </MDButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

ChatMessage.propTypes = {
  text: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

export default Chatbot;
