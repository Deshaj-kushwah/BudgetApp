// src/components/Transactions.jsx
import { useState, useEffect } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Box, Typography, Button, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [newTx, setNewTx] = useState({ title: "", amount: 0, type: "expense" });

  const fetchTransactions = async () => {
    const res = await axios.get("http://localhost:3000/transaction/get");
    setTransactions(res.data.transactions);
  };

  useEffect(() => { fetchTransactions(); }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/transaction/${id}`);
    fetchTransactions();
  };

  const handleAdd = async () => {
    await axios.post("http://localhost:3000/transaction/add", newTx);
    fetchTransactions();
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Transactions</Typography>
      <Box display="flex" gap={2} mb={2}>
        <TextField label="Title" value={newTx.title} onChange={e => setNewTx({ ...newTx, title: e.target.value })}/>
        <TextField label="Amount" type="number" value={newTx.amount} onChange={e => setNewTx({ ...newTx, amount: e.target.value })}/>
        <TextField label="Type" value={newTx.type} onChange={e => setNewTx({ ...newTx, type: e.target.value })}/>
        <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(tx => (
            <TableRow key={tx._id}>
              <TableCell>{tx.title}</TableCell>
              <TableCell>{tx.amount}</TableCell>
              <TableCell>{tx.type}</TableCell>
              <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(tx._id)} color="error">
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
