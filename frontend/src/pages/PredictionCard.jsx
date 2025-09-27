// src/components/PredictionCard.jsx
import { Card, CardContent, Typography } from "@mui/material";

export default function PredictionCard({ predictions }) {
  return (
    <Card elevation={4} sx={{ minWidth: 200, backgroundColor: "#f5f5f5" }}>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          Predicted Expenses
        </Typography>
        <Typography variant="h6" color="secondary" fontWeight="bold">
          {predictions?.nextMonth ? `₹ ${predictions.nextMonth}` : "₹ 0"}
        </Typography>
      </CardContent>
    </Card>
  );
}
