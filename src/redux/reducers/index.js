import { combineReducers } from 'redux';
import userData from './user';
import walletData from './wallet';

const rootReducer = combineReducers({
  user: userData,
  wallet: walletData,
});

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
export default rootReducer;
