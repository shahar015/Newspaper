import React from 'react';
import './student.css';

function Student(props) {
  const { name, image, birthdate, zodiacSign, favoriteMovieOrTVShow, hobbies, futureGoal, futureIn20Years } = props.data;

  return (
    <div className="student">
        <div className="student-info">
            <img className="student-photo" src={image} alt="student" />
            <h1 className="student-name">{name}</h1>
        </div>
        <ul className="student-attributes">
            <li><div className='attribute'><strong>יום הולדת:&nbsp; </strong> {birthdate}</div></li>
            <li><div className='attribute'><strong>מזל:&nbsp; </strong> {zodiacSign}</div></li>
            <li><div className='attribute'><strong>סדרה/סרט אהובים:&nbsp; </strong> {favoriteMovieOrTVShow}</div></li>
            <li><div className='attribute'><strong>תחביבים:&nbsp; </strong> {hobbies}</div></li>
            <li><div className='attribute'><strong>מה ארצה לעשות בעתיד:&nbsp; </strong> {futureGoal}</div></li>
            <li><div className='attribute'><strong>אני בעוד 20 שנה:&nbsp; </strong> {futureIn20Years}</div></li>
        </ul>
    </div>
  );
}

export default Student;
