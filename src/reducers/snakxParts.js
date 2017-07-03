import { ACTION_TYPE } from '../actions';

const snakxParts = (state = [{ x: 0, y: 0 }], action) => {
  switch (action.type) {
    case ACTION_TYPE.MOVE_SNAKX:
      let newSnakxParts = [{ x: action.x, y: action.y }, ...state];
      while (newSnakxParts.length > action.snakxSize) {
        newSnakxParts.pop();
      }
      return newSnakxParts;
    case ACTION_TYPE.RESET_SNAKX:
      return [{ x: 0, y: 0 }];
    default:
      return state;
  }
};

export default snakxParts;
