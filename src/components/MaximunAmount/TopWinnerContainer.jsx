import React, { useEffect, useState } from "react";
import { fetchTopClient } from "../../services/api";
import TopWinner from "./TopWinner";

const TopWinnerContainer = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const getTopClient = async () => {
      try {
        const res = await fetchTopClient();
        console.log(res.data);
        setClient(res.data);
      } catch (err) {
        console.error("Error al obtener el cliente top", err);
      }
    };

    getTopClient();
  }, []);

  if (!client || !client.client_name || client.total === undefined)
    return <p>Cargando...</p>;

  return <TopWinner nombre={client.client_name} total={client.total} />;
};

export default TopWinnerContainer;
