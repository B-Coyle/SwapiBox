import React from 'react';
import PlanetContainer from '../CardContainer/PlanetContainer.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';


describe('PlanetContainer', () => {
    let wrapper; 
    const defaultState ={
            planets: [],
            error: "",
            loading: false
          }
    beforeEach(()=> {
    wrapper = shallow(<PlanetContainer/>);

    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
        });
    
    it("should have default state", () => {
        expect(wrapper.state()).toEqual(defaultState);
    });

})