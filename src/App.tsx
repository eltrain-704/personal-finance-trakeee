import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Chart from './components/Chart';
import './App.css';

interface Transaction {
  type: string;
  category: string;
  amount: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const addTransaction = (type: string, category: string, amount: number) => {
    const newTransaction = { type, category, amount };
    setTransactions([...transactions, newTransaction]);
  };

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <Chart transactions={transactions} />
    </div>
  );
};

export default App;
