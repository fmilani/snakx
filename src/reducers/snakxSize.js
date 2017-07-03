import { ACTION_TYPE } from '../actions';

const snakxSize = (state = 3, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREASE_SNAKX_SIZE:
      return state + action.amount;
    case ACTION_TYPE.DECREASE_SNAKX_SIZE:
      return state - action.amount;
    case ACTION_TYPE.RESET_SNAKX_SIZE:
      return 3;
    default:
      return state;
  }
};

export default snakxSize;
