import React, { Component } from 'react';
import  Button from '../Button/Button.js';
import PeopleContainer from '../CardContainer/PeopleContainer.js';
import PlanetContainer from '../CardContainer/PlanetContainer.js';
import VehicleContainer from '../CardContainer/VehicleContainer.js';

export default class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      showButtons: true,
      showCards: false,
      category: null,
    }
  }

  showCards = (event) => {
    let {showCards} = this.state;
    if (!event || showCards) {
      this.setState({
        showCards: !showCards
      });
    }
    
  }

  selectCategory = (event) => {
    const category = event.target.innerHTML;

    this.showCards();

    this.setState({ 
      category
        })
  }

  setContainer = () => {
    switch (this.state.category) {
      case "people":
        return <PeopleContainer />;
      case "planets":
        return <PlanetContainer />;
      case "vehicles":
        return <VehicleContainer />;
      default:
        return <h2>Error Loading Information</h2>

    }
  }

  render() {
    let {showButtons, showCards} = this.state;
    let cardContainer = this.setContainer();
    let buttonContainer = (
      <Button selectCategory={this.selectCategory} />
    );
    

    return (
      <main className="main">
        {showButtons && buttonContainer}
        {showCards && cardContainer}
      </main>
    );
  }
}