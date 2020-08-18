import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient';

import './custom.scss';

class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetched: false,
      data: [],
      ingredients: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3300/ingredients')
      .then(res => res.json())
      .then(
        (json) => {
          this.setState({
            data: json
          });
        }, (err) => {
          this.setState({
            isFetched: true,
            err
          });
        }
      ).then(() => {
        var arr = [];

        this.state.data.forEach(e => {
          for(var i = 0; i < e.ingredients.length; i++) {
            for(var j = 0; j < e.ingredients[i].ingredients.length; j++) {
              arr.push(e.ingredients[i].ingredients[j].name);
            }
          }
        });

        this.setState({
          isFetched: true,
          ingredients: [ ...new Set(this.state.ingredients.concat(arr)) ]
        });
      });
  }

  render() {
    if(!this.state.isFetched) {
      return null;
    } else {
      const ingList = this.state.ingredients.map((ing) =>
        <Ingredient ingredient={ing.toLowerCase()} />
      );

      return (
        <div className="col-md-6" id="ingredient-container">
          <ul className="ing-list">
            {ingList}
          </ul>
        </div>
      );
    }
  }
}

class RecipeContainer extends Component {
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
      <div className="col-md-6" id="recipe-container">
        {el}
      </div>
    );
  }
}

class Container extends Component {
  render() {
    return (
      <div className="container-xl">
        <div className="row">
          <IngredientContainer />
          <RecipeContainer />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);