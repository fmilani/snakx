import React, { Component } from 'react';
import { Rect } from 'react-konva';

import { GAME_WIDTH, GAME_HEIGHT } from './constants';

class Background extends Component {
  render() {
    return (
      <Rect
        x={0}
        y={0}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        fill={this.props.color}
      />
    );
  }
}

export default Background;
