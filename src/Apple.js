import React, { Component } from 'react';
import { Rect } from 'react-konva';

// size, in pixels of 1 apple part
const UNIT = 20;
class Apple extends Component {
  render() {
    const { position } = this.props;
    return (
      <Rect
        x={position.x * UNIT}
        y={position.y * UNIT}
        width={UNIT}
        height={UNIT}
        fill="#ff0000"
        stroke="#222"
      />
    );
  }
}

export default Apple;
