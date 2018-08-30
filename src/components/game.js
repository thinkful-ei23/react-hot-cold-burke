import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {guesses : [], lastGuess: null, winningNumber: (Math.floor(Math.random() * 101)) }
    }

    setNewGame() {
        this.setState({
            guesses: [], lastGuess: null, winningNumber: (Math.floor(Math.random() * 101))
        })
    }

    addNewGuess(newGuess) {
        const lastGuessNum = parseInt(newGuess, 10);
        this.setState({
            guesses: [...this.state.guesses, lastGuessNum],
            lastGuess: lastGuessNum
        });
    }

    calculateFeedback(lastGuess) {
        if (lastGuess === null) {
            return 'Make your guess';
        }
        let feedback;
        const winningNumber = this.state.winningNumber;
        if (lastGuess === winningNumber) {
            feedback = 'You won! Click new game to play again';
        } else if (Math.abs(lastGuess - winningNumber) < 10) {
            feedback = 'Hot';
        } else if ((Math.abs(lastGuess - winningNumber) < 25)) {
            feedback = 'Kinda hot';
        } else if ((Math.abs(lastGuess - winningNumber) < 40)) {
            feedback = 'Lukewarm';
        } else {
            feedback = 'Cold';
        }
        return feedback;
    }

    render() {
        const feedback = this.calculateFeedback(this.state.lastGuess);
        return (
        <div>
            <Header setNewGame={() => this.setNewGame()} />
            <GuessSection addNewGuess={(newGuess) => this.addNewGuess(newGuess)} feedback={feedback} />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }
}

