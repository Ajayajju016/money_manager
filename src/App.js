import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { getTransactions, addTransaction, deleteTransaction } from "./api";

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions on component mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  // Function to handle adding a transaction
  const handleAddTransaction = async (newTransaction) => {
    try {
      const savedTransaction = await addTransaction(newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, savedTransaction]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  // Function to handle deleting a transaction
  const handleDeleteTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions((prevTransactions) => prevTransactions.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  // Calculate summary amounts
  const totalReceived = transactions
    .filter((t) => t.status === "Received")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalToSend = transactions
    .filter((t) => t.status === "Sent money")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="app">
      <h2>Money Manager</h2>

      <div className="navbar">
        <div>
          <strong>Total Received:</strong> <strong className="received">₹{totalReceived}</strong>
        </div>
        <div>
          <strong>Sent money:</strong> <strong className="sent">₹{totalToSend}</strong>
        </div>
      </div>

      <TransactionForm addTransaction={handleAddTransaction} />
      <h3>Transaction List</h3>
      <TransactionList
        transactions={transactions}
        deleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;
