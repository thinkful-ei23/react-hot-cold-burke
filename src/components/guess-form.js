import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addNewGuess(this.state.input);
        this.clearInput();
    }

    clearInput() {
        this.setState({input: ''})
    }

    render() {
        return (
        <form onSubmit={(e) => this.onSubmit(e)}>
            <input onChange={(e) => this.setState({input: e.target.value})} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" value={this.state.input} required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
        );
    }
};

