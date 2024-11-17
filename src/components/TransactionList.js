import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
        <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Amount</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Transaction Date</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Purpose</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ padding: "10px", textAlign: "center" }}>
              No transactions added yet
            </td>
          </tr>
        ) : (
          transactions.map((transaction, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {transaction.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                ₹{transaction.amount}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {transaction.transactionDate}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {transaction.status}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "4px" }}>
                {transaction.purpose}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                <button
                  onClick={() => deleteTransaction(index)}
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    backgroundColor: "#ff4d4d",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default TransactionList;
