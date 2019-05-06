import React, { Component } from "react";
import Card from "../Card/Card";
import {
  fetchMaster,
  fetchResidents
} from "../ApiCall/apiCalls.js";
const uuidv4 = require("uuid/v4");

class PlanetsContainer extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      error: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ 
      isLoading: true 
    });

    this.setPlanets();
  }

  setPlanets = () => {
    fetchMaster('planets')
      .then(data => fetchResidents(data.results))
      .then(planets => this.formatPlanet(planets));
  };

  formatPlanet = planets => {
    let trimmedPlanets = planets.map(planet => {
       return planet.length
      ? planet.pop() 
      : planet
    });
    let updatedPlanets = trimmedPlanets.map(planet => {
      let { name, terrain, population, climate, residentNames } = planet;
      return { name, terrain, population, climate, residents: residentNames, key: uuidv4() };
    });
    this.setState({ 
      planets: updatedPlanets, 
      isLoading: false 
    });
  };

  render() {
    const planetCards = this.state.planets.map(planet => (
      <Card key={planet.key} data={planet} category="planet" />
    ));

    const loadingMessage = (
      <div className="loadingMessage">
        <p>Information loading. Please Hold...</p>
      </div>
    );
    return (
      <section className="cardContainer planetContainer">
        {this.state.isLoading ? loadingMessage : planetCards}
      </section>
    );
  }
}

export default PlanetsContainer;
