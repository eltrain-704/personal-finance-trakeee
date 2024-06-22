import React from 'react';

interface Transaction {
  type: string;
  category: string;
  amount: number;
}

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <div key={index}>
          {transaction.type}: {transaction.category} - ${transaction.amount.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
