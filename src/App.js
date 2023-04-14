import './App.css';
import React from "react";
import Student from './student'
import Recipe from './Recipe';
import yonatanImage from './Images/yonatan.jpeg'; 
import mishelImage from './Images/mishel.jpeg'; 
import natanelImage from './Images/natanel.jpeg'; 
import End from './End';

function App() {

  const student1 = {
    name: 'יונתן אברגל',
    image: yonatanImage,
    birthdate: '20.7.2004',
    zodiacSign: 'סרטן',
    favoriteMovieOrTVShow: 'לוסט או משחקי הכס',
    hobbies: 'יוניטי לשחות ותופים',
    futureGoal: 'לתכנת משחקי מחשב',
    futureIn20Years: 'מנהל חברה של משחקי מחשב'
  };

  const student2 = {
    name: 'נאתנאל כהן',
    image: natanelImage,
    birthdate: '26/04/2004',
    zodiacSign: 'שור',
    favoriteMovieOrTVShow: 'Breaking Bad',
    hobbies: 'תה צמחים',
    futureGoal: 'מתכנת וסופר',
    futureIn20Years: 'בהולנד'
  };

  const student3 = {
    name: 'מישל זוהר',
    image: mishelImage,
    birthdate: '10/09/2004',
    zodiacSign: 'בתולה',
    favoriteMovieOrTVShow: 'בובספוג',
    hobbies: 'שחייה, כושר וולהיות עם חברים',
    futureGoal: 'להיות חקלאי ',
    futureIn20Years: 'חקלאי'
  };
  const ingredients=['0.5 כוס פסטה קטנה (60 גרם)', "2 כפות שמנת מתוקה", "2 כפיות צהובה מגורדת אם רוצים", "20 גרם גבינת מוצרלה מגורדת", "80 גרם גבינת צ'דר מגורדת", "0.5 כפית אבקת שום","0.5 כפית פפריקה אדומה","0.5 כפית פלפל לבן או שחור"]
  const makingProcess=['מחממים בספל עמוק או בכלי עמוק (כדי שלא ישפך במיקרוגל) את הפסטה עם המים התבלינים ו-25 גרם חמאה, מוציאים, מערבבים ומכניסים למיקרוגל לעוד 2 וחצי או 3 דקות (אמורים עדיין להיות קצת נוזלים - אם יש יותר מדיי (כי אולי בטעות שמתם הרבה מים) תוציאו קצת עם הכפית אבל תשאירו קצת נוזלים!', 'תוסיפו עוד 25 גרם חמאה, את הגבינות המגורדות ואת השמנת המתוקה, תערבבו קצת ותכניסו ל-30 שניות במיקרוגל, תוציאו, תנו ערבוב ותכניסו לעוד 30 שניות, אח"כ תוציאו ותערבבו, אם לא הגעתם למרקם הגבינתי הרצוי תוסיפו עוד קצת שמנת מתוקה ועוד קצת גבינה מגורדת ותערבבו', 'ניתן לקשט עם עירית או פטרוזיליה קצוצה, בתיאבון!']

  return (
    <div className='app'>
      <div className="cover">
        <div className="cover-text">
          <h1>PSI C Weekly Newspaper</h1>
          <img src="https://www.shutterstock.com/image-vector/vector-shield-icon-600w-523861894.jpg" alt="School logo" />
          <p>12/04/20 - 14/04/20</p>
        </div>
      </div>

      <div class="meeting-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: `rotate(${180}deg)`}}> 
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
      </div>
      <div className="meeting-corner">
        <div className="meeting-corner-title">פינת היכרות</div>
        <Student data={student1} />
        <Student data={student2} />
        <Student data={student3} />
      </div>
      <div class="recipe-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: `rotate(${180}deg)`}}> 
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill='#87f172' class="shape-fill"></path>
          </svg>
      </div>
      <div className="recipe-section">
        
        <Recipe title="מק אנד צ'יז במיקרוגל"  ingredients={ingredients} making={makingProcess}/>
      </div>
      <div class="end-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: `rotate(${180}deg)`}}> 
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill='#6ecde1' class="shape-fill"></path>
          </svg>
      </div>
      <div className="finish-section">
        <End joke="Why do programmers prefer dark mode? Because light attracts bugs" challenge="תכתבו את המשפט ״ אין על קורס פס״י ״ עם היד החלשה שלכם ובידקו למי יצא הכי יפה"/>
      </div>
    </div>
  );
}

export default App;
