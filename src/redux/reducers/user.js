import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: 'razidias@gmail.com',
};

const userData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return action.email;
  default:
    return state;
  }
};

export default userData;
