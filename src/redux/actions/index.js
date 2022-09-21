export const LOGIN = 'LOGIN';
export const WALLET_REDUCE = 'WALLET_REDUCE';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_VALUE = 'SAVE_VALUE';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';

export const userLogin = (email) => ({
  type: LOGIN,
  email,
});

export const walletValueAdd = (value) => ({
  type: WALLET_REDUCE,
  value,
});

export const walletAddExpenses = (commingExpenses) => ({
  type: ADD_EXPENSES,
  commingExpenses,
});

export const saveData = (expense) => ({
  type: SAVE_DATA,
  expense,
});

export const saveExpenseValue = (expenseValue) => ({
  type: SAVE_VALUE,
  expenseValue,
});

export const deleteExpenses = (expenses) => ({
  type: DELETE_EXPENSES,
  expenses,
});

export const editExpenses = (expenses) => ({
  type: EDIT_EXPENSES,
  expenses,
});

export const requestEditExpense = (id) => ({
  type: REQUEST_EXPENSES,
  id,
});
