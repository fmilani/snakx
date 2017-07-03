import { ACTION_TYPE } from '../actions';

const score = (state = 0, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREASE_SCORE:
      return state + action.amount;
    case ACTION_TYPE.RESET_SCORE:
      return 0;
    default:
      return state;
  }
};

export default score;
