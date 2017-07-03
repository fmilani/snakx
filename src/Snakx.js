import React, { Component } from 'react';
import { Group, Rect } from 'react-konva';

// size, in pixels of 1 snakx part
const UNIT = 20;
class Snakx extends Component {
  render() {
    const { snakxParts } = this.props;
    return (
      <Group>
        {snakxParts.map((snakxPart, index) =>
          <Rect
            key={`${snakxPart.x},${snakxPart.y},${index}`}
            x={snakxPart.x * UNIT}
            y={snakxPart.y * UNIT}
            width={UNIT}
            height={UNIT}
            fill={this.props.color}
            stroke={this.props.borderColor}
          />,
        )}
      </Group>
    );
  }
}

export default Snakx;
