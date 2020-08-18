import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';

class Recipe extends React.Component {
  render() {
    const recipe = {
      width: "12rem",
    };

    return (
      <p className="h2">{this.props.value}</p>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      test: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3300/recipes')
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            test: res[0].name
          });
        }, (err) => {
          this.setState({
            isLoaded: true,
            err
          });
        }
      );
  }

  render() {
    return (
      <div className="container-xl">
        <Recipe value={this.state.test}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);