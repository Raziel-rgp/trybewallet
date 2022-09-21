// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_REDUCE, ADD_EXPENSES, SAVE_VALUE,
  DELETE_EXPENSES, EDIT_EXPENSES, REQUEST_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  totalValue: 0,
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_REDUCE:
    return {
      ...state,
      currencies: action.value,
    };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.commingExpenses] };

  case SAVE_VALUE:
    return {
      ...state,
      totalValue: action.expenseValue,
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  case EDIT_EXPENSES:
    console.log(action);
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.expense.id) {
          return { ...action.expense };
        }
        return expense;
      }),
      editor: false,
    };
  case REQUEST_EXPENSES:
    console.log(action);
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  default:
    return state;
  }
};

export default walletData;
