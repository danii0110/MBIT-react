import { useState } from 'react';
import classes from './TestPage.module.scss';
import logo from '../assets/images/logo.png';
import backBtn from '../assets/images/backBtn.png';
import nextBtn from '../assets/images/nextBtn.png';

const TestPage = () => {
  const [number, setNumber] = useState(1);

  const buttonClickHander = (event) => {
    number < 12 && setNumber(number + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerImage}>
        <img src={logo} alt='logo-header' />
      </div>

      <div className={classes.question}>question</div>
      <div className={classes.answer}>answer</div>
      <div className={classes.progress}>{number}/12</div>
      <div className={classes.btn}>
        <img className={classes.backBtn} src={backBtn} alt='back-button' onClick={buttonClickHander} />
        <img className={classes.nextBtn} src={nextBtn} alt='next-button' onClick={buttonClickHander} />
      </div>
    </div>
  );
};

export default TestPage;
