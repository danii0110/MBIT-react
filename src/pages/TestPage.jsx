import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import questions from './contents/questions';
import score from './contents/score';

import classes from './TestPage.module.scss';

import logo from '../assets/images/logo.png';
import SelectBtn from '../components/SelectBtn';
import backArrow from '../assets/images/backArrow.png';

function TestPage() {
  const navigate = useNavigate();
  const num = useParams().id;

  const [quiz, setQuiz] = useState({});
  const [id, setId] = useState(0);
  const [type, setType] = useState('');

  useEffect(() => {
    const numAsInt = parseInt(num, 10);
    if (questions) {
      setQuiz(questions[numAsInt - 1]);
      setId(numAsInt + 1);
    }
  }, [num]);

  const getScore = (arr) => {
    let scoreNum = 5;
    arr.map((field) => {
      score[0][field] = +score[0][field] + scoreNum;
      scoreNum -= 1;
      if (score[0][field] > +score[1].maxScore) {
        score[1].maxScore = score[0][field];
        score[1].maxField = field;
      }
    });
    if (score[1].maxField === '프론트') {
      setType('front');
    } else if (score[1].maxField === '백') {
      setType('back');
    } else if (score[1].maxField === '데이터') {
      setType('data');
    } else if (score[1].maxField === '보안') {
      setType('security');
    } else if (score[1].maxField === '게임') {
      setType('game');
    }
  };

  const backBtn = () => {
    navigate(-1);
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.top} />
        <div className={classes.logos}>
          <img className={classes.logo} src={logo} alt='logo' />
        </div>
        <div className={classes.bottom}>
          <img className={classes.backArrow} src={backArrow} alt='back-arrow' onClick={backBtn} />
          <div className={classes.progress}>
            {num}
            /10
          </div>
          <div className={classes.question}>
            {(quiz.question || '').split('\n').map((line) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </div>
          <br />
          {num < 10 && (
            <div className={classes.answers}>
              {quiz.answer &&
                quiz.answer.map((item, index) => (
                  <div key={index}>
                    <SelectBtn
                      handleOnClick={() => {
                        getScore(item.field);
                        navigate(`/test/${id}`);
                      }}
                    >
                      {item.text}
                    </SelectBtn>
                  </div>
                ))}
            </div>
          )}
          {num == 10 && (
            <div className={classes.answers}>
              {quiz.answer &&
                quiz.answer.map((item, index) => (
                  <div key={index}>
                    <SelectBtn
                      handleOnClick={() => {
                        getScore(item.field);
                        navigate(`/result/${type}`);
                      }}
                    >
                      {item.text}
                    </SelectBtn>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
