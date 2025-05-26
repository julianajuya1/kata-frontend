import React from "react";
import "./TransactionTable.scss";

const TransactionTable = ({ data }) => {
  return (
    <div className="container">
      <h2 className="container__title">Lista de Transacciones</h2>
      <table className="container__table">
        <thead className="container__table-head">
          <tr className="container__table-row">
            <th className="container__table--header-cell">ID</th>
            <th className="container__table--header-cell">Fecha</th>
            <th className="container__table--header-cell">Cliente</th>
            <th className="container__table--header-cell">Monto</th>
            <th className="container__table--header-cell">Medio de Pago</th>
          </tr>
        </thead>
        <tbody>
          {data.map((txn) => (
            <tr key={txn.id} className="container__table--row">
              <td className="container__table--cell">{txn.id}</td>
              <td className="container__table--cell">
                {new Date(txn.transaction_date).toLocaleDateString()}
              </td>
              <td className="container__table--cell">{txn.customer_name}</td>
              <td className="container__table--cell">
                ${parseFloat(txn.amount).toLocaleString()}
              </td>
              <td className="container__table--cell">{txn.means_payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
