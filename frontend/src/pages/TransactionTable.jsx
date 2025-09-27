// src/components/TransactionTable.jsx
import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import API from "../API/api.js";
import axios from "axios";

export default function TransactionTable({ transactions, refresh }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/transaction/${id}`);
    refresh();
  };

  return (
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
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
