import React from "react";
import './TransactionTable.module.css';

const TransactionTable = ({ data }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
        Lista de Transacciones
      </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Monto</th>
            <th>Medio de Pago</th>
          </tr>
        </thead>
        <tbody>
          {data.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{new Date(txn.transaction_date).toLocaleDateString()}</td>
              <td>{txn.customer_name}</td>
              <td>${parseFloat(txn.amount).toLocaleString()}</td>
              <td>{txn.means_payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
