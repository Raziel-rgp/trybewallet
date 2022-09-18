export const LOGIN = 'LOGIN';
export const WALLET_REDUCE = 'WALLET_REDUCE';

export const userLogin = (value) => ({
  type: LOGIN,
  value,
});

export const walletValueAdd = (value) => ({
  type: WALLET_REDUCE,
  value,
});
