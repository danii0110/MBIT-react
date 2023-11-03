import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import questions from './contents/questions';
import score from './contents/score';

import classes from './TestPage.module.scss';

// import backBtn from '../assets/images/backBtn.png';
// import nextBtn from '../assets/images/nextBtn.png';
// import submitBtn from '../assets/images/submitBtn.png';
import SelectBtn from '../components/SelectBtn';
import backArrow from '../assets/images/backArrow.png';

function TestPage() {
  const num = useParams().id;

  const [quiz, setQuiz] = useState({});
  const [id, setId] = useState(0);
  const [type, setType] = useState('');

  // const [error, setError] = useState();

  useEffect(() => {
    // props 객체의 변경 감지(useEffect)
    // const num = parseInt(props.params.id);
    const numAsInt = parseInt(num, 10);
    if (questions) {
      //!Number.isNaN(numAsInt)
      // questions 변수가 존재하는지 확인
      setQuiz(questions[numAsInt - 1]); // 인덱스에 해당하는 퀴즈 데이터를 quiz 상태 변수에 설정
      setId(numAsInt + 1); // 다음 질문 번호 설정
    }
  }, [num]); // 이 useEffect 블록은 props 객체의 변경에 대응하여 실행됨

  const getScore = (arr) => {
    let scoreNum = 5; // 각 답변 항목에 부여할 초기 점수
    arr.map((field) => {
      score[0][field] = +score[0][field] + scoreNum;
      // 현재 답변 항목(field)에 대한 점수를 업데이트, 해당 답변 항목의 점수를 현재의 값에서 scoreNum만큼 증가
      scoreNum -= 1; // 다음 답변 항목에 부여할 초기 점수가 1 감소
      if (score[0][field] > +score[1].maxScore) {
        // 현재 답변 항목의 점수가 최고 점수보다 높은지를 확인
        score[1].maxScore = score[0][field];
        // 만약 현재 답변 항목의 점수가 최고 점수보다 높다면, 최고 점수를 업데이트. score[1].maxScore에 현재 답변 항목의 점수를 설정
        score[1].maxField = field;
        // 최고 점수를 받은 분야의 이름을 score[1].maxField에 설정. 나중에 결과 페이지로 이동할 때 어떤 분야의 결과를 표시할지 결정하는데 사용됨
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

  return (
    <div className={classes.container}>
      <div className={classes.top} />
      <div className={classes.bottom}>
        <img className={classes.backArrow} src={backArrow} alt='back-arrow' />
        <div className={classes.progress}>
          {num}
          /12
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
        {num < 12 && (
          <div className={classes.answers}>
            {quiz.answer &&
              quiz.answer.map((item, index) => (
                <Link to={`/test/${id}`} key={index}>
                  <SelectBtn handleOnClick={() => getScore(item.field)}>{item.text}</SelectBtn>
                </Link>
              ))}
          </div>
        )}
        {num == 12 && (
          <div className={classes.answers}>
            {quiz.answer &&
              quiz.answer.map((item, index) => (
                <Link to={`/result/${type}`} key={index}>
                  <SelectBtn handleOnClick={() => getScore(item.field)}>{item.text}</SelectBtn>
                </Link>
              ))}
          </div>
        )}
        {/* <div className={classes.btn}>
        <img className={classes.backBtn} src={backBtn} alt='back-button' />
        {num < 12 && <img className={classes.nextBtn} src={nextBtn} alt='next-button' />}
        {num == 12 && <img className={classes.nextBtn} src={submitBtn} alt='submit-button' />}
      </div> */}
      </div>
    </div>
  );
}

export default TestPage;
