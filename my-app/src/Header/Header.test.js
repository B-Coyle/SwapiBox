import React from 'react';
import Header from '../Header/Header.js';
import {shallow} from 'enzyme';
import { isMainThread } from 'worker_threads';

describe('Header', () => {
    let wrapper

it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
    });

})
