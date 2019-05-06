import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {
  fetchMaster,
  fetchResidents
} from '../ApiCall/apiCalls.js';
const uuidv4 = require("uuid/v4");


export default class PlanetContainer extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      error: "",
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ 
      loading: true 
    });

    this.setPlanets();
  }

  setPlanets = () => {
    fetchMaster("planets")
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
      loading: false 
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
        {this.state.loading ? loadingMessage : planetCards}
      </section>
    );
  }
}


PlanetContainer.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  residents: PropTypes.string,
  terrain: PropTypes.string,
};
