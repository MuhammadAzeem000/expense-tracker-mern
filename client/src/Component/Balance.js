import React, { useContext } from "react";
import { GlobalContext } from "../GloabalState/GlobalContext";

export const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const balance = transaction
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="balance">
      <h1>${balance.toFixed(2)}</h1>
      <h4>Current Balance</h4>
    </div>
  );
};
