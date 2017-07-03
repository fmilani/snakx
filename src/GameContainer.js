import { connect } from 'react-redux';
import Game from './Game.js';
import {
  turnLeft,
  turnUp,
  turnRight,
  turnDown,
  moveSnakx,
  resetSnakx,
  increaseScore,
  resetScore,
  increaseSnakxSize,
  resetSnakxSize,
  spawnApple,
} from './actions';

const mapStateToProps = state => {
  return {
    velocity: state.velocity,
    score: state.score,
    snakxParts: state.snakxParts,
    snakxSize: state.snakxSize,
    speed: state.speed,
    apple: state.apple,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    turnLeft: () => {
      dispatch(turnLeft());
    },
    turnUp: () => {
      dispatch(turnUp());
    },
    turnRight: () => {
      dispatch(turnRight());
    },
    turnDown: () => {
      dispatch(turnDown());
    },
    moveSnakx: (x, y, snakxSize) => {
      dispatch(moveSnakx(x, y, snakxSize));
    },
    resetSnakx: () => {
      dispatch(resetSnakx());
    },
    increaseScore: amount => {
      dispatch(increaseScore(amount));
    },
    resetScore: () => {
      dispatch(resetScore());
    },
    resetSnakxSize: () => {
      dispatch(resetSnakxSize());
    },
    increaseSnakxSize: amount => {
      dispatch(increaseSnakxSize(amount));
    },
    spawnApple: (x, y) => {
      dispatch(spawnApple(x, y));
    },
  };
};
const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
