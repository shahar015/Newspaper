import React from 'react';
import './End.css';

const End = (props) => {
  return (
    <div className='end-container'>
      <div className="container">
      <h1 className='weekly-title'>הבדיחה השבועית</h1>
      <div className='content'>
        <h2 className="title">😂</h2>
        <p className="joke-text">{props.joke}</p>
      </div>
      <div></div>
    </div>

    <div className="container">
      <h1 className='weekly-title'>האתגר השבועי</h1>
      <div className='content'>
        <h2 className="title">🏆</h2>
        <p className="ch-text">{props.challenge}</p>
      </div>
      <div></div>
      </div>
    </div>
  );
}

export default End;
