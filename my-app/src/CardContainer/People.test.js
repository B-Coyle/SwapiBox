import React from 'react';
import PeopleContainer from '../CardContainer/PeopleContainer.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';


describe('PeopleContainer', () => {
    let wrapper; 
    const defaultState = {
        people: [],
        error: "",
        loading: true
    };
    
      beforeEach(()=> {
        wrapper = shallow(<PeopleContainer/>);

      });

    it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
    });

    it("should have default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
    });

})