import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';

import questions from './contents/questions';
import score from './contents/score';

import classes from './TestPage.module.scss';

import backBtn from '../assets/images/backBtn.png';
import nextBtn from '../assets/images/nextBtn.png';
import SelectBtn from '../components/SelectBtn';

function TestPage() {
  const num = useParams().id;
  // const navigate = useNavigate();

  const [quiz, setQuiz] = useState({});
  const [id, setId] = useState(0);
  const [type, setType] = useState('');

  useEffect(() => {
    // props 객체의 변경 감지(useEffect)
    // const num = parseInt(props.params.id);
    // console.log(num);
    // console.log(id, type);
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
      <div className={classes.contents}>
        <div className={classes.progress}>
          {num}
          /10
        </div>
        <div className={classes.question}>{quiz.question}</div>
        <br />
        {num < 10 && (
          <div className={classes.answers}>
            {quiz.answer &&
              quiz.answer.map((item, index) => (
                <Link to={`/test/${id}`} key={index}>
                  <SelectBtn handleOnClick={() => getScore(item.field)}>{item.text}</SelectBtn>
                </Link>

                // <SelectBtn
                //   key={index}
                //   handleOnClick={() => {
                //     getScore(item.field);
                //     navigate(`/test/${id}`);
                //   }}
                // >
                //   {item.text}
                // </SelectBtn>
              ))}
          </div>
        )}
        {num === 10 && (
          <div>
            {quiz.answer &&
              quiz.answer.map((item, index) => (
                // <SelectBtn
                //   key={index}
                //   handleOnClick={() => {
                //     getScore(item.field);
                //     navigate(`/result/${type}`);
                //   }}
                // >
                //   {item.text}
                // </SelectBtn>
                <Link to={`/result/${type}`} key={index}>
                  <SelectBtn handleOnClick={() => getScore(item.field)}>{item.text}</SelectBtn>
                </Link>
              ))}
          </div>
        )}
      </div>
      <div className={classes.btn}>
        <img className={classes.backBtn} src={backBtn} alt='..' />
        <img className={classes.nextBtn} src={nextBtn} alt='..' />
      </div>
    </div>
  );
}

export default TestPage;
