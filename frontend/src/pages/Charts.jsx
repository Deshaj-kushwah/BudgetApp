// src/components/Charts.jsx
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Charts({ transactions }) {
  const chartData = transactions.map(tx => ({
    name: new Date(tx.date).toLocaleDateString(),
    amount: tx.amount
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#3f51b5" />
      </LineChart>
    </ResponsiveContainer>
  );
}
