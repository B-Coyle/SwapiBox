import React from 'react';
import Crawl from 'react-star-wars-crawl';

import 'react-star-wars-crawl/lib/index.css'

const MyCrawlComponent = (props) => (
    <div>
    <Crawl
      title= 'Star Wars'
      subTitle={props.randomFilm.title}
      text= {props.randomFilm.opening_crawl}
    />
    </div>
)

export default MyCrawlComponent;