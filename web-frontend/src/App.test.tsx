import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders without crashing', () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
