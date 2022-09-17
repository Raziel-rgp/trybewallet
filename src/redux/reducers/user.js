import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const userData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return action.value;
  default:
    return state;
  }
};

export default userData;
