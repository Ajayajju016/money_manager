import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

import './App.css'

function App() {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage when the app initializes
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to delete a transaction by index
  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  // Calculate summary amounts
  const totalReceived = transactions
    .filter((t) => t.status === "Received")
    .reduce((acc, t) => acc + t.amount, 0);

  // const totalYetToReceive = transactions
  //   .filter((t) => t.status === "Yet to Receive")
  //   .reduce((acc, t) => acc + t.amount, 0);

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
        {/* <div>
          <strong>Yet to Receive:</strong> <strong className="yettoreceive">₹{totalYetToReceive}</strong>
        </div> */}
        <div>
          <strong>Sent money:</strong> <strong className="sent">₹{totalToSend}</strong>
        </div>
      </div>

      <TransactionForm addTransaction={addTransaction} />
      <h3>Transaction List</h3>
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
