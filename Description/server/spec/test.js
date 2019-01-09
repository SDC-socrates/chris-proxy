const React = require('react');
const request = require('request');
import Enzyme, {shallow, mount} from 'enzyme';
import App from '../../client/src/components/App.jsx';
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

test('Able to retrive one data given ID', () => {
  request('http://127.0.0.1:3000/api/turash/description/50', (err, response, body) => {
    const output = JSON.parse(body);
    expect(typeof output).toBe('object');
    expect(output.id).toBe(50);
    expect(output).toHaveProperty('trips');
    expect(output).toHaveProperty('faq');
  });

  request('http://127.0.0.1:3000/api/turash/description/70', (err, response, body) => {
    const output = JSON.parse(body);
    expect(typeof output).toBe('object');
    expect(output.id).toBe(70);
    expect(output).toHaveProperty('business');
    expect(output).toHaveProperty('doors');
  });
});


test('App component renders', () => {
  const wrapper = mount(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('App component changeToArray working correctly', () => {
  const obj = {key1: 1, key2: 2, key3: 3};
  expect(App.prototype.changeToArray(obj)).toEqual([1, 2, 3]);
});











