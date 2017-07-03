import { ACTION_TYPE } from '../actions';

const apple = (state = { x: 15, y: 15 }, action) => {
  switch (action.type) {
    case ACTION_TYPE.SPAWN_APPLE:
      return { x: action.x, y: action.y };
    default:
      return state;
  }
};

export default apple;
