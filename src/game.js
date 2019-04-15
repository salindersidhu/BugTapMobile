import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import Matter from "matter-js";
import { GameEngine } from 'react-native-game-engine';

import Box from './box';

const { width, height } = Dimensions.get("screen");
const boxSize = Math.trunc(Math.max(width, height) * 0.075);
const initialBox = Matter.Bodies.rectangle(width/2, height / 2, boxSize, boxSize);

const styles = StyleSheet.create({
    game: {
        backgroundColor: '#000000'
    }
});

class Game extends PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <GameEngine
                ref={"engine"}
                style={styles.game}
                systems={[]}
                entities={{
                    initialBox: { body: initialBox, size: [boxSize, boxSize], color: 'red', renderer: Box}
                }}
            >
                <StatusBar hidden={true} />
            </GameEngine>
        );
    }
}

export default Game;
