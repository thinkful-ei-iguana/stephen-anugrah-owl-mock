import React from 'react';

const Participant = (props) => {
  
  let stage;
  if (!props.inSession) {
    stage = 'left the session';
  } else {
      if(!props.onStage) {
        stage = 'in session';
      } else {
        stage = 'on stage';
      }
    }

  return (
    <div className='Participant'>
      <img src={props.avatar} alt='participants avatar' />
      <h2>{props.name}</h2>
      <p>{stage}</p>
    </div>
  );
};

export default Participant;