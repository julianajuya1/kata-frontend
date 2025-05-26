import React, { useEffect, useState } from "react";
import { fetchAllTransactions } from "../../services/api";
import TransactionTable from "./TransactionTable";

const TransactionTableContainer = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await fetchAllTransactions();
        setTransactions(res.data);
      } catch (error) {
        console.error("Error al obtener transacciones:", error);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, []);

  if (loading) return <p>Cargando transacciones...</p>;
  if (!transactions.length) return <p>No hay transacciones disponibles.</p>;

  return <TransactionTable data={transactions} />;
};

export default TransactionTableContainer;
