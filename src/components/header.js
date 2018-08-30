import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // toggleModal() {
    //     this.setState({showModal: this.state.showModal ? false : true})
    // }

    // whatToRender() {
    //     const baseArray = [<TopNav toggleModal={() => this.toggleModal()} setNewGame={() => this.props.setNewGame()} />];
    //     const renderArray = this.state.showModal === true ? [...baseArray, <InfoModal />] : [...baseArray];
    //     return renderArray;
    // }

    render() {
        // const render = this.whatToRender();
        return (
            <header>
                <TopNav toggleModal={() => this.toggleModal()} setNewGame={() => this.props.setNewGame()} />
                {/* <InfoModal /> */}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
