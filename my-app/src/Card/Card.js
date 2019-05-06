import React, { Component } from "react";
import './Card.scss';
import PropTypes from "prop-types";

const uuidv4 = require("uuid/v4");

class Card extends Component {
  constructor() {
    super()
    this.state = {
      favorited: false
    }
  }

  formatData = (data) => {
    let dataKeys = Object.keys(data)
      .filter(key => key !== 'key' && key !== 'name');
    return dataKeys.map(key => {
      if (key === 'residents'){
        return (
          <li key={uuidv4()}>
            Residents:
            <ul>{this.formatResidents(data[key])}</ul>
          </li>
        );
      } else if (key === 'vehicleClass'){
        return (
          <li key={uuidv4()}>
            Class:
            <ul>{data[key]}</ul>
          </li>
        );
      } else {
        return (
          <li key={uuidv4()}>
            {this.formatKey(key)}: {data[key]}
          </li>
        );
      }
    });
  }

  formatKey = key => {
    let keyLetters = key.split('');
    keyLetters.splice(0, 1, keyLetters[0].toUpperCase());
    return keyLetters;
  }

  formatResidents = data => {
    return data 
      ? data.map(resident => {
        return (
          <li key={uuidv4()}>
            {resident}
          </li>
        );
      })
      : (<li key={uuidv4()}>
            N/A
          </li>)
  }

  render() {
    let { data } = this.props;
    return (
      <article className="card">
        <h3>{data.name}</h3>
        <ul>
          {this.formatData(data)}
        </ul>
        <input type="button" className="favoriteCard" value="Favorite" />
      </article>
    );
  }
}

export default Card;

Card.propTypes = {
  Model: PropTypes.string,
  Class: PropTypes.string,
  Passengers: PropTypes.string,
  Homeworld: PropTypes.string,
  Species: PropTypes.string,
  Climate: PropTypes.string,
  Name: PropTypes.string,
  Population: PropTypes.string,
  Residents: PropTypes.string,
  Terrain: PropTypes.string,
  Favorited: PropTypes.bool,
};