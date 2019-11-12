import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList.js';
import Participant from './Participant';

const testArr= [{
    id: 1,
    name: 'Koren Templeton',
    avatar:
        'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true
},
{
    id: 2,
    name: 'Caty Flucker',
    avatar:
        'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: false
}];



describe('<ParticipantList />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');


        ReactDOM.render(<ParticipantList 
           participants= {testArr}
        />, div);
    
        ReactDOM.unmountComponentAtNode(div);
    })   
})

describe('<ParticipantList />', () => {
    it('renders this UI as expected', () => {
        const list = renderer.create(<ParticipantList 
            participants= {testArr}
            />).toJSON();

        expect(list).toMatchSnapshot();

    });    
});