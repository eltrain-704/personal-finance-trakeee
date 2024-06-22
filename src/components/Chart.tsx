import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Transaction {
  type: string;
  category: string;
  amount: number;
}

interface Props {
  transactions: Transaction[];
}

const Chart: React.FC<Props> = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [income, expense],
      backgroundColor: ['#4caf50', '#f44336'],
    }],
  };

  return <Pie data={data} />;
};

export default Chart;
