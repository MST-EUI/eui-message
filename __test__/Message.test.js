import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import Message from '../src/';

Enzyme.configure({ adapter: new Adapter() });

test('Message should render correctly', () => {
  mount(<Message />);
});

test('Message props', () => {
  // Render a checkbox with label in the document
  const Message = shallow(<Message className="test" />);
  expect(Message.find('.eui-empty-data-content')).toBeTruthy();
});

