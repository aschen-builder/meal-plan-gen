import React, { Component } from 'react';

class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.ingredient,
            error: null
        }
    }

    render() {
        return (
            <li key={this.state.name}>
                <button className="btn btn-outline-primary">{this.state.name}</button>
            </li>
        );
    }
}

export default Ingredient;