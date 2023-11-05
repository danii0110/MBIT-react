import style from '../styles/Main.module.scss';
import logoImg from '../assets/images/indexLogo.svg';
import Fe from '../assets/images/result(Fe).svg';
// 전체 결과 유형 -> 애니메이션 전환
import startBtn from '../assets/images/startBtn.svg';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div className={style.Main}>
      <div className={style.logoArea}>
        <img src={logoImg} alt='로고' />
      </div>

      <div className={style.resultCase}>
        <img src={Fe} alt='결과 유형' />
        {/* 해당 부분 프레임워크 추가해서 수정 */}
      </div>

      <div
        className={style.startBtn}
        onClick={() => {
          navigate('/test/1');
        }}
      >
        <img src={startBtn} alt='시작하기 버튼' />
      </div>
    </div>
  );
}

export default Main;
