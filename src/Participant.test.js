import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant.js';

describe('<Participant />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('<Participant />', () => {
  it('renders this UI as expected', () => {

    const part = renderer.create(<Participant />).toJSON();

    expect(part).toMatchSnapshot();
  })
})