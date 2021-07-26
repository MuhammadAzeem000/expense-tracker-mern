import "./App.css";

import { Header } from "./Component/Header";
import { Balance } from "./Component/Balance";
import { IncomeExpense } from "./Component/IncomeExpense";
import { TransactionList } from "./Component/TransactionList";
import { AddTransaction } from "./Component/AddTransaction";

import { GlobalProvider } from "./GloabalState/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
