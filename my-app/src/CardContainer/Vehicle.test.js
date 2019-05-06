import React from 'react';
import VehicleContainer from '../CardContainer/VehicleContainer.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';


describe('VehicleContainer', () => {
    let wrapper; 
    const defaultState ={
            vehicles: [],
            error: "",
            isLoading: false
          }
    beforeEach(()=> {
    wrapper = shallow(<VehicleContainer/>);
    });

    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
        });
    
    it("should have default state", () => {
        expect(wrapper.state()).toEqual(defaultState);
    });

})