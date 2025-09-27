// src/components/Budget.jsx
import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

export default function Budget() {
  const [budget, setBudget] = useState({ total: 0 });

  const fetchBudget = async () => {
    const res = await axios.get("http://localhost:3000/budget/get");
    setBudget(res.data);
  };

  useEffect(() => { fetchBudget(); }, []);

  const handleSetBudget = async () => {
    await axios.post("http://localhost:3000/budget/set", budget);
    fetchBudget();
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Set Budget</Typography>
      <TextField label="Total Budget" type="number" value={budget.total} onChange={e => setBudget({ total: e.target.value })}/>
      <Button variant="contained" color="primary" onClick={handleSetBudget} sx={{ ml:2 }}>Set</Button>
      <Typography mt={2}>Current Budget: ₹ {budget.total}</Typography>
    </Box>
  );
}
