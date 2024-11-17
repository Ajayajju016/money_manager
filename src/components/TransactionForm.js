import React, { useState } from "react";

import '../App.css';

function TransactionForm({ addTransaction }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [status, setStatus] = useState("Sent money");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !transactionDate || !purpose) {
      alert("Please fill out all fields");
      return;
    }

    const newTransaction = {
      name,
      amount: parseFloat(amount),
      transactionDate,
      status,
      purpose,
    };

    addTransaction(newTransaction);

    // Reset form fields
    setName("");
    setAmount("");
    setTransactionDate("");
    setStatus("Sent money");
    setPurpose("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="input"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Transaction Date:</label>
        <input
          type="date"
          value={transactionDate}
          onChange={(e) => setTransactionDate(e.target.value)}
          required
          className="input"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="input"
        >
          <option value="Sent money">Sent money</option>
          <option value="Received">Received</option>
          <option value="Yet to Receive">Yet to Receive</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Purpose:</label>
        <input
          type="text"
          placeholder="Enter purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
          className="input"
        />
      </div>

      <button type="submit" style={{padding: "10px",borderRadius:"7px"}}>
        Add Entry
      </button>
    </form>
  );
}

export default TransactionForm;