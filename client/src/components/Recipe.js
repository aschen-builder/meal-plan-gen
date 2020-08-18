import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        if(!this.props.fetched) {
            return (
                <h2>Fetching data...</h2>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-img">
                        <img src="../../public/images/test.png" alt="test"></img>
                    </div>
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