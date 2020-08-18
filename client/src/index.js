import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Recipe from './components/Recipe';

import './custom.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetched: false,
      recipes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3300/recipes')
      .then(res => res.json())
      .then(
        (json) => {
          this.setState({
            isFetched: true,
            recipes: json
          });
        }, (err) => {
          this.setState({
            isFetched: true,
            err
          });
        }
      );
  }

  render() {
    var el = [];

    for(var i = 0; i < this.state.recipes.length; i++) {
      el.push(<Recipe data={this.state.recipes[i]} fetched={this.state.isFetched} />);
    }

    return (
      <div className="container-xl">
        {el}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);