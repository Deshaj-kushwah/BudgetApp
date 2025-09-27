// src/components/DashboardCard.jsx
import { Card, CardContent, Typography } from "@mui/material";

export default function DashboardCard({ title, value }) {
  return (
    <Card elevation={4} sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
