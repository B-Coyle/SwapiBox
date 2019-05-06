import React, { Component } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { fetchMaster } from '../ApiCall/apiCalls.js';
import './Container.scss'
const uuidv4 = require("uuid/v4");

export default class VehicleContainer extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      error: "",
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ 
      loading: true 
    });

    this.setVehicles();
  }

  setVehicles = () => {
    fetchMaster("vehicles")
      .then(data => this.formatVehicle(data.results))
      .catch(error => this.setState({ error }));
  };

  formatVehicle = vehicles => {
    let updatedVehicles = vehicles.map(vehicle => {
      let { name, model, passengers } = vehicle;
      let vehicleClass = vehicle.vehicle_class;
      console.log(vehicleClass)
      return { name, model, vehicleClass, passengers, key: uuidv4() };
    });
    this.setState({ 
      vehicles: updatedVehicles, 
      loading: false 
    });
  };

  render() {
    const vehiclesCards = this.state.vehicles.map(vehicle => (
      <Card key={vehicle.key} data={vehicle} category="vehicle" />
    ));

    const loadingMessage = (
      <div className="loadingMessage">
        <p>Information loading. Please Hold...</p>
      </div>
    );
    return (
      <section className="cardContainer vehiclesContainer">
        {this.state.loading ? loadingMessage : vehiclesCards}
      </section>
    );
  }
}
