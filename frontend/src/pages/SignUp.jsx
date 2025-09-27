// src/components/Signup.jsx
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/user/signUp", form);
      alert("Signup Successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.error || "Signup failed");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5} justifyContent={"center"}>
      <Typography variant="h4" mb={2}>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" type="email" onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
      </form>
    </Box>
  );
}
