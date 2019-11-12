import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Pariticipant from './Participant';

describe(<Pariticipant />, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pariticipant />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

