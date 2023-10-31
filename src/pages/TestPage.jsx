import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import classes from './TestPage.module.scss';

// import logo from '../assets/images/logo.png';
import backBtn from '../assets/images/backBtn.png';
import nextBtn from '../assets/images/nextBtn.png';
import SelectBtn from '../components/SelectBtn';

import testData from './content/questions';

const TestPage = () => {
  const navigate = useNavigate(); //
  const { params } = useParams(); //파라미터 값

  const [question, setQuestion] = useState(testData.question); //문제
  const [contents, setContents] = useState([]); //답변
  const [Number, setNumber] = useState(1); //문제 번호

  const btnClickHandler = () => {};

  return (
    <div className={classes.container}>
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
