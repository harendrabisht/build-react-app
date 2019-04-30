import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from 'component/HelloWorld.js';

describe('<HelloWorld />', () => {
	test('should component render', () => {
		const wrapper = shallow(<HelloWorld />);
		expect(wrapper.find('.hello-world').length).toBe(1);
	});
});
