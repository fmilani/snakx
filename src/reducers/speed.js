import { ACTION_TYPE } from '../actions';

const speed = (state = 15, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREASE_SPEED:
      return state + action.amount;
    case ACTION_TYPE.DECREASE_SPEED:
      return state - action.amount;
    case ACTION_TYPE.RESET_SPEED:
      return 15;
    default:
      return state;
  }
};

export default speed;
