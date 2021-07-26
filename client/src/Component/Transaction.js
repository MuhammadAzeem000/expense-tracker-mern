import React, { useContext } from "react";

import { GlobalContext } from "../GloabalState/GlobalContext";

export const Transaction = ({ transaction }) => {
  const { deleteBtn } = useContext(GlobalContext);
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      <h4>{transaction.text}</h4>
      <span>
        +${Math.abs(transaction.amount)}
        <i
          className={
            transaction.amount > 0 ? "fas fa-caret-up" : "fas fa-caret-down"
          }
        ></i>
        <i
          className="fas fa-trash-alt"
          onClick={() => deleteBtn(transaction.id)}
        ></i>
      </span>
    </li>
  );
};
