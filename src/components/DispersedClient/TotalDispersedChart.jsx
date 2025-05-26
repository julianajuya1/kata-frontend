import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TotalDispersedChart = ({ data }) => {
  if (!data || !data.length) return <p>No hay datos para graficar.</p>;
  console.log("Datos para el gráfico:", data);

  return (
    <div style={{ width: "50%", height: 350, minHeight: 350 }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Dispersión Total por Cliente
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="client_name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#4CAF50" />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalDispersedChart;
