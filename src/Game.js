import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';

import { MAX_X, MAX_Y, GAME_WIDTH, GAME_HEIGHT } from './constants';
import Background from './Background';
import Snakx from './Snakx';
import Apple from './Apple';

class Game extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.update = this.update.bind(this);
    this.state = { running: false };
  }

  componentWillMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <Stage width={GAME_WIDTH} height={GAME_HEIGHT}>
        <Layer style={{ margin: '0 auto' }}>
          <Background color="#222" />
          <Snakx
            color="#00ff00"
            borderColor="#222"
            snakxParts={this.props.snakxParts}
          />
          <Apple position={this.props.apple} />
        </Layer>
      </Stage>
    );
  }

  onKeyDown(event) {
    if (!this.state.running) {
      this.props.resetSnakxSize();
      this.props.resetSnakx();
      this.props.resetScore();
      this.setState({ running: true });
      this.setState({
        stopGame: setInterval(this.update, 1000 / this.props.speed),
      });
    }

    let vx = this.props.velocity.x;
    let vy = this.props.velocity.y;
    switch (event.keyCode) {
      case 37:
        if (vx === 0) {
          this.props.turnLeft();
        }
        break;
      case 38:
        if (vy === 0) {
          this.props.turnUp();
        }
        break;
      case 39:
        if (vx === 0) {
          this.props.turnRight();
        }
        break;
      case 40:
        if (vy === 0) {
          this.props.turnDown();
        }
        break;
      default:
        break;
    }
  }

  update() {
    const {
      apple,
      snakxParts,
      snakxSize,
      velocity,
      resetScore,
      resetSnakx,
      resetSnakxSize,
      increaseScore,
      increaseSnakxSize,
      spawnApple,
      moveSnakx,
    } = this.props;

    // update snakx's position
    let px = snakxParts[0].x + velocity.x;
    let py = snakxParts[0].y + velocity.y;

    if (px < 0) {
      px = MAX_X;
    } else if (px > MAX_X) {
      px = 0;
    }

    if (py < 0) {
      py = MAX_Y;
    } else if (py > MAX_Y) {
      py = 0;
    }

    for (let i = 0; i < snakxParts.length; i++) {
      if (snakxParts[i].x === px && snakxParts[i].y === py) {
        this.setState({ running: false });
        clearInterval(this.state.stopGame);
        return;
      }
    }

    if (apple.x === px && apple.y === py) {
      increaseSnakxSize(1);
      increaseScore(10);
      let appleX = Math.floor(Math.random() * (MAX_X + 1));
      let appleY = Math.floor(Math.random() * (MAX_Y + 1));
      while (snakxParts.includes({ x: appleX, y: appleY })) {
        appleX = Math.floor(Math.random() * (MAX_X + 1));
        appleY = Math.floor(Math.random() * (MAX_Y + 1));
      }
      spawnApple(appleX, appleY);
    }

    moveSnakx(px, py, snakxSize);
  }
}

export default Game;
