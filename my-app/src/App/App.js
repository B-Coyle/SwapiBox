import React, {Component} from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import Crawl from '../Crawl/Crawl.js';
import {fetchMovie} from '../ApiCall/apiCalls.js';
import MainContainer from '../MainContainer/MainContainer.js';

export default class App extends Component{
    constructor(){
        super()
        this.state ={
            allFilms: [],
            randomFilm: {},
            skipCrawl: false 
        }

    }

    componentDidMount() {
       fetchMovie()
       .then(films => this.setState({
           allFilms: films.results
       }, () => this.assignRandomInformation()
       ) )
    }


    assignRandomInformation= () => {
        let randomNumber = Math.floor(Math.random() * this.state.allFilms.length )
        this.setState ({
        randomFilm: this.state.allFilms[randomNumber],
        })
    }

     skipScroll=()=>{
         this.setState({
             skipCrawl: true
         })
    }

    render(){
        if(this.state.skipCrawl === false) {
            return(
                <section className="App mainBody">
                    <header className="headerContainer">
                        <Header />
                    </header>
                    <main className="crawlContainer">
                        <Crawl randomFilm={this.state.randomFilm} />
                        <input className="button skipBtn" type="button" value="skip" onClick={this.skipScroll}/>
                    </main>
                </section>
            )
        } else return(
            <section className="App mainBody">
                <header className="headerContainer">
                    <Header />
                </header>
                <main className="mainCardArea">
                    <MainContainer />
                </main>
            </section>
        )
    }
}

// App.propTypes = {
//     allFilms: PropTypes.array,
//     randomFilm: PropTypes.object,
//     skipCrawl: PropTypes.bool
//   };

