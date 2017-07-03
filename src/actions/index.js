export const ACTION_TYPE = {
  // velocity actions
  TURN_LEFT: 'TURN_LEFT',
  TURN_UP: 'TURN_UP',
  TURN_RIGHT: 'TURN_RIGHT',
  TURN_DOWN: 'TURN_DOWN',

  // speed actions
  INCREASE_SPEED: 'INCREASE_SPEED',
  DECREASE_SPEED: 'DECREASE_SPEED',
  RESET_SPEED: 'RESET_SPEED',

  // apple actions
  SPAWN_APPLE: 'SPAWN_APPLE',

  // snakxParts actions
  MOVE_SNAKX: 'MOVE_SNAKX',
  RESET_SNAKX: 'RESET_SNAKX',

  // score actions
  INCREASE_SCORE: 'INCREASE_SCORE',
  RESET_SCORE: 'RESET_SCORE',

  // snakxSize actions
  INCREASE_SNAKX_SIZE: 'INCREASE_SNAKX_SIZE',
  DECREASE_SNAKX_SIZE: 'DECREASE_SNAKX_SIZE',
  RESET_SNAKX_SIZE: 'RESET_SNAKX_SIZE',
};

/**
 * Action creators
 */
export function turnLeft() {
  return { type: ACTION_TYPE.TURN_LEFT };
}

export function turnUp() {
  return { type: ACTION_TYPE.TURN_UP };
}
export function turnRight() {
  return { type: ACTION_TYPE.TURN_RIGHT };
}
export function turnDown() {
  return { type: ACTION_TYPE.TURN_DOWN };
}

export function increaseSpeed(amount) {
  return { type: ACTION_TYPE.INCREASE_SPEED, amount };
}

export function decreaseSpeed(amount) {
  return { type: ACTION_TYPE.DECREASE_SPEED, amount };
}

export function resetSpeed() {
  return { type: ACTION_TYPE.RESET_SPEED };
}

export function spawnApple(x, y) {
  return { type: ACTION_TYPE.SPAWN_APPLE, x, y };
}

export function moveSnakx(x, y, snakxSize) {
  return { type: ACTION_TYPE.MOVE_SNAKX, x, y, snakxSize };
}

export function resetSnakx() {
  return { type: ACTION_TYPE.RESET_SNAKX };
}

export function increaseScore(amount) {
  return { type: ACTION_TYPE.INCREASE_SCORE, amount };
}

export function resetScore() {
  return { type: ACTION_TYPE.RESET_SCORE };
}

export function increaseSnakxSize(amount) {
  return { type: ACTION_TYPE.INCREASE_SNAKX_SIZE, amount };
}

export function decreaseSnakxSize(amount) {
  return { type: ACTION_TYPE.DECREASE_SNAKX_SIZE, amount };
}

export function resetSnakxSize() {
  return { type: ACTION_TYPE.RESET_SNAKX_SIZE };
}
