import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

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
                entities={[]}
            >
                <StatusBar hidden={true} />
            </GameEngine>
        );
    }
}

export default Game;
