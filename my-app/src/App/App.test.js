import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('App', () => {
// beforeEach(){
//   const wrapper = shallow(<App />)
// }
//double check wrapper setup is correct. Need to make this global so I don't have to reference in each 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
  const wrapper= shallow(<App />)
  expect(wrapper).toMatchSnapshot();
});

it('should have an initial state that is an empty array, an empty object, and is false', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.instance().state).toEqual({
    allFilms: [],
    randomFilm: {},
    skipCrawl: false })
});
//set this one above to a variable and set expected to equal that variable

it.skip('should invoke componentDidMount', () => {
  const wrapper= shallow(<App />)
  wrapper.setState({
    allFilms: [{title: 'SW'}]
  })
  expect(wrapper.state('allFilms')).toEqual([]);
  wrapper.instance().componentDidMount();
  expect(wrapper.state('allFilms')).toEqual([{'title': 'SW'}]);
});

it('should update the skipCrawl state when skipCrawl is called', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state('skipCrawl')).toEqual(false);
  wrapper.instance().skipScroll();
  expect(wrapper.state('skipCrawl')).toEqual(true);
});

it('should update the randomFilm state when assignRandomInformation is called', () => {
  const wrapper = shallow(<App />)
  // const mockFilm = [randomNumber]
  wrapper.setState({
    allFilms: [{title: 'SW'}, {title: 'SW'},{title: 'SW'},{title: 'SW'},{title: 'SW'},{title: 'SW'},{title: 'SW'},]
  })
  expect(wrapper.state('randomFilm')).toEqual({});
  wrapper.instance().assignRandomInformation();
  expect(wrapper.state('randomFilm')).toEqual({title: 'SW'});
 });
})