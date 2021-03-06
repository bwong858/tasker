import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, ...action.user };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
};

console.log('remember hardcoded email');
