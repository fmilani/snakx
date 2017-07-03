import { combineReducers } from 'redux';
import apple from './apple';
import score from './score';
import snakxParts from './snakxParts';
import snakxSize from './snakxSize';
import speed from './speed';
import velocity from './velocity';

const snakxApp = combineReducers({
  apple,
  score,
  snakxParts,
  snakxSize,
  speed,
  velocity,
});

export default snakxApp;
