import React, { useContext } from "react";
import { GlobalContext } from "../GloabalState/GlobalContext";

export const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);

  const amount = transaction.map((transaction) => transaction.amount);

  const income = amount
    .filter((amount) => amount > 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const expense = amount
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="inc-exp-container">
      <div className="income">
        <h2>
          ${income} <i className="fas fa-caret-up"></i>
        </h2>
        <h4>Income</h4>
      </div>
      <div className="expense">
        <h2>
          ${Math.abs(expense).toFixed(2)} <i className="fas fa-caret-down"></i>
        </h2>
        <h4>Expense</h4>
      </div>
    </div>
  );
};
