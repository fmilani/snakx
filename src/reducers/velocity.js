import { ACTION_TYPE } from '../actions';

const velocity = (state = { x: 0, y: 0 }, action) => {
  switch (action.type) {
    case ACTION_TYPE.TURN_LEFT:
      return { x: -1, y: 0 };
    case ACTION_TYPE.TURN_UP:
      return { x: 0, y: -1 };
    case ACTION_TYPE.TURN_RIGHT:
      return { x: 1, y: 0 };
    case ACTION_TYPE.TURN_DOWN:
      return { x: 0, y: 1 };
    default:
      return state;
  }
};

export default velocity;
