import TotalDispersedChartContainer from "./components/DispersedClient/TotalDispersedChartContainer";
import TopWinnerContainer from "./components/MaximunAmount/TopWinnerContainer";
import TransactionTableContainer from "./components/Transactions/TransactionTableContainer";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textAlign: "center" }}>Dispersión de Fondos</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          height: "60vh",
          overflow: "hidden",
          width: "70%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TopWinnerContainer />
        <TotalDispersedChartContainer />
      </div>
      <TransactionTableContainer />
    </div>
  );
}

export default App;
