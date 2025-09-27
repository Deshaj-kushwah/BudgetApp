// src/components/Predictions.jsx
import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";

export default function Predictions() {
  const [predictions, setPredictions] = useState({ nextMonth: 0 });

  useEffect(() => {
    const fetchPredictions = async () => {
      const res = await axios.get("http://localhost:3000/insights/prediction");
      setPredictions(res.data);
    };
    fetchPredictions();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Predicted Expenses</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Next Month: ₹ {predictions.nextMonth}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
