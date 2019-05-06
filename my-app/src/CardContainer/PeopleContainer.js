import React, {Component} from 'react';
import {fetchPeople, fetchHomeworld, fetchSpecies} from '../ApiCall/apiCalls.js';
import Card from '../Card/Card.js';
import './Container.scss';

const uuidv4 = require("uuid/v4");

export default class PeopleContainer extends Component{
    constructor() {
        super()
        this.state= {
            people: [],
            error: '',
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
          loading: true
        });

        this.getPeople();
      }
    
      getPeople = () => {
        fetchPeople()
          .then(data => fetchHomeworld(data.results))
          .then(people => fetchSpecies(people))
          .then(people => this.formatPerson(people))
          .catch(error => this.setState({ error }));
      };
    
      formatPerson = people => {
        let updatedPeople = people.map(person => {
          let { name, homeworld, population, species } = person;
          return { name, homeworld, population, species, key: uuidv4() };
        });

        this.setState({ 
          people: updatedPeople, 
          loading: false 
        });
        
      }; 

      render() {
        const peopleCards = this.state.people.map(person => 
          <Card 
            key={person.key}
            data={person}
            category="person"
          />
        )
    
        const loadingMessage = (
          <div className="loadingMessage">
            <p>Information loading. Please Hold...</p>
          </div>
        );
        return (
          <section className="cardContainer">
            {this.state.loading ? loadingMessage : peopleCards}
          </section>
        );
      }
    }

