// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_REDUCE } from '../actions/index';

const INITIAL_STATE = {
  expenses: 0,
  currency: 'BRL',
};

const walletData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_REDUCE:
    return action.value;
  default:
    return state;
  }
};

export default walletData;
