/* eslint-disable no-unused-expressions */
import React from 'react';
import Participant from './Participant';



const participantList = (props) => {

    return (
    <section className="participantList">
        {props.participants.map((participant) => {
            <Participant 
            key={participant.id}
            name={participant.name}
            avatar={participant.avatar}
            onStage={participant.onStage}
            inSession={participant.inSession}
            />
        })}
    </section>
    );
};

export default participantList;