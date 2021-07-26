import React, { useContext } from "react";

import { Transaction } from "./Transaction";

import { GlobalContext } from "../GloabalState/GlobalContext";

export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <div className="history">
      <h2 className="title-history">History</h2>
      <ul className="history-box">
        {transaction.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
};
