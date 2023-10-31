// import { useState, useEffect } from 'react';

import questions from '../pages/contents/questions';
import score from '../pages/contents/score';

import classes from './TestCard.module.scss';

import backBtn from '../assets/images/backBtn.png';
import nextBtn from '../assets/images/nextBtn.png';
import SelectBtn from './SelectBtn';

const TestPage = ({ match }) => {
  return (
    <div className={classes.container}>
      {match.pa}
      <div className={classes.progress}>1/12</div>
      <div className={classes.question}>question</div>
      <div className={classes.answers}>
        <SelectBtn>test message</SelectBtn>
      </div>
      <div className={classes.btn}>
        <img className={classes.backBtn} src={backBtn} alt='back-button' />
        <img className={classes.nextBtn} src={nextBtn} alt='next-button' />
      </div>
    </div>
  );
};

export default TestPage;
