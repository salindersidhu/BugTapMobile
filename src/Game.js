import React from 'react';
import Matter from 'matter-js';
import {GameEngine} from 'react-native-game-engine';
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

import {Box} from './components';

export default function Game() {
  const {width, height} = Dimensions.get('screen');
  const boxSize = Math.trunc(Math.max(width, height) * 0.075);
  const initialBox = Matter.Bodies.rectangle(
    width / 2,
    height / 2,
    boxSize,
    boxSize,
  );

  return (
    <GameEngine
      style={styles.game}
      systems={[]}
      entities={{
        initialBox: {
          body: initialBox,
          size: [boxSize, boxSize],
          color: 'red',
          renderer: Box,
        },
      }}>
      <StatusBar hidden />
    </GameEngine>
  );
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: '#000000',
  },
});
