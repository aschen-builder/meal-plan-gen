import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';

class Recipe extends React.Component {
  render() {
    const recipe = {
      width: "12rem",
    };

    return (
      <div className="card" style={recipe}>
        <div className="card-body">
          <div className="card-text">Hello World</div>
        </div>
      </div>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    }
  }

  render() {
    return (
      <div className="container-xl">
        <Recipe />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);