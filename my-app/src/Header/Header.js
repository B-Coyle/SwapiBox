import React, {Component} from 'react';
import './Header.scss'

export default class Header extends Component{
    render(){
        return(
            <header className="mainHeader">
                <h1 className="title">Star Wars</h1>
                <img alt="Black jedi icon" src={require("../Images/jediicon.png")} className="jediIcon" />
                <h3 className="subtitle">Explore the universe...</h3>
                <button className="favBtn">Show Favorites: <span className="favNumber">0</span></button>
            </header>
        )
    }
}

