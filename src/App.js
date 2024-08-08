import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// все компоненты
import Header from "./components/main/base";
import HomePage from "./components/main/main";
import ManualPage from "./components/manual/manual";
import AdminPanel from "./components/admin_panel/admin_panel";
import HistoryBank from "./components/admin_panel/history_bank";
import HistoryGame from "./components/admin_panel/history_game";
import HistoryInspector from "./components/admin_panel/history_inspector";
import HistoryStocks from "./components/admin_panel/history_stocks";
import Bank from "./components/bank/bank";
import FinancialInspector from "./components/financial/financial";
import GameStation from "./components/game_station/game_station";
import AccountPage from "./components/main/account";
import MapsPage from "./components/maps/maps_page";
import StocksPage from "./components/stocks/stocks_page";
import Authorization from "./components/registration/login";
import StockOperations from "./components/stocks/stock_operations";
import QuotesPage from "./components/stocks/stocks";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/manual" element={<ManualPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/history-bank" element={<HistoryBank />} />
          <Route path="/history-game" element={<HistoryGame />} />
          <Route path="/history-inspector" element={<HistoryInspector />} />
          <Route path="/history-stocks" element={<HistoryStocks />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/financial-inspector" element={<FinancialInspector />} />
          <Route path="/game-station" element={<GameStation />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/stock-operations" element={<StockOperations />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
