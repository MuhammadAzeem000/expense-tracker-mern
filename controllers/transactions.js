// @desc   GET all transactions
// @route  GET /api/v1/transactions
// @access Public
const getTransactions = (req, res, next) => {
  res.send("GET Transaction");
};

// @desc   ADD transactions
// @route  POST /api/v1/transactions
// @access Public
const addTransaction = (req, res, next) => {
  res.send("POST Transaction");
};

// @desc   DELETE transactions
// @route  DELETE /api/v1/transactions/:id
// @access Public
const deleteTransaction = (req, res, next) => {
  res.send("DELETE Transaction");
};

export { getTransactions, addTransaction, deleteTransaction };
