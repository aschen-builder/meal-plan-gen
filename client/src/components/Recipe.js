import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        if(!this.props.fetched) {
            return;
        } else {
            return (
                <div className="card m-2">
                    <div className="card-body">
                        <div className="card-header">{this.props.data.name}</div>
                        <div className="card-text">{this.props.data.summary}</div>
                    </div>
                </div>
            );
        }
    }
}

export default Recipe;