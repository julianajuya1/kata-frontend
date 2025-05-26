import React, { useEffect, useState } from 'react';
import { fetchDispersedClient } from '../../services/api';
import TotalDispersedChart from './TotalDispersedChart';

const TotalDispersedChartContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchDispersedClient();
        const cleanedData = res.data.map(item => ({
        ...item,
        total: Number(item.total),
      }));
        console.log(cleanedData)
        setData(cleanedData);
      } catch (err) {
        console.error('Error al obtener datos de dispersión por cliente', err);
      }
    };

    getData();
  }, []);

  if (!data.length) return <p>Cargando gráfica...</p>;

  return <TotalDispersedChart data={data} />;
};

export default TotalDispersedChartContainer;
