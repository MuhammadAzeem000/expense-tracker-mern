import React, { useState, useContext } from "react";
import { GlobalContext } from "../GloabalState/GlobalContext";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handle(e) {
    if (text === "" && amount === 0) {
      alert("Please fill the required field");
    } else {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }
  }

  return (
    <div className="transaction">
      <h2 className="transaction-title">Add New Transaction</h2>
      <form className="transaction-form" onSubmit={handle}>
        <input
          type="text"
          className="for-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Insert text here (eg. Salary)"
        />
        <input
          type="number"
          className="for-amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Insert your amount here (eg. +100)"
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};
