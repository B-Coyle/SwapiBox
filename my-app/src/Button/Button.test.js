import React from 'react';
import Button from '../Button/Button.js';
import {shallow} from 'enzyme';
import { isMainThread } from 'worker_threads';

describe('Button', () => {
    let wrapper

it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
    });

})
