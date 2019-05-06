import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';


export default function CardContainer(props) {
  return (
    <section className="mainBtns" onClick={event => props.selectCategory(event)} >
      <button className="button">people</button>
      <button className="button">planets</button>
      <button className="button">vehicles</button>
    </section>
  );
}

CardContainer.propTypes = {
selectCategory: PropTypes.func
}