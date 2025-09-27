// src/pages/Dashboard.jsx
import { Box, Grid, Typography } from "@mui/material";
import DashboardCard from "../pages/DashboardCard.jsx";
import Charts from "./Charts.jsx";
import PredictionCard from "../pages/PredictionCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({
    transactions: [],
    budget: { total: 0 },
    predictions: { nextMonth: 0 }
  });

  const fetchData = async () => {
    try {
      const tx = await axios.get("http://localhost:3000/transaction/get");
      const budget = await axios.get("http://localhost:3000/budget/get");
      const predictions = await axios.get("http://localhost:3000/insights/prediction");

      setData({
        transactions: tx.data.transactions,
        budget: budget.data,
        predictions: predictions.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="Total Transactions" value={data.transactions.length} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard title="Total Budget" value={`₹ ${data.budget.total}`} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PredictionCard predictions={data.predictions} />
        </Grid>

        {/* Charts */}
        <Grid item xs={12}>
          <Charts transactions={data.transactions} />
        </Grid>
      </Grid>
    </Box>
  );
}
