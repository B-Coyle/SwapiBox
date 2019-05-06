import React from 'react';
import './Button.scss';

export default function CardContainer(props) {
  return (
    <section className="mainBtns" onClick={event => props.selectCategory(event)} >
      <button className="button">people</button>
      <button className="button">planets</button>
      <button className="button">vehicles</button>
    </section>
  );
}
