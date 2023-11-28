import style from './StartPage.module.scss';
import logoImg from '../assets/images/logo.png';
import Fe from '../assets/images/frontDeveloper.png';
import Be from '../assets/images/backDeveloper.png';
import Ds from '../assets/images/dataScientist.png';
import Security from '../assets/images/securityEngineer.png';
import Game from '../assets/images/gameDeveloper.png';
import startBtn from '../assets/images/startBtn.png';
import { useNavigate } from 'react-router-dom';

const images = [Fe, Be, Ds, Security, Game];
// 이미지 랜덤 출력을 위한 배열 선언

function getRandom() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return { image: images[randomIndex], name: randomIndex };
}
// 0~1 사이의 실수 생성, 정수 변환을 통해 images[0 ~ 4] 리턴
// 각 이미지의 Height가 다름. 각 경우에 따라 layout 조정

function getMargin(name) {
  switch (name) {
    case 0: // Fe
      return '123px';
    case 1: // Be
      return '62px';
    case 2: // Ds
      return '37px';
    case 3: // Security
      return '27px';
    case 4: // Game
      return '49px';
  }
}

function Main() {
  const navigate = useNavigate();
  const { image, name } = getRandom();
  const margin = getMargin(name);

  return (
    <div className={style.Main}>
      <div className={style.logoArea}>
        <img src={logoImg} alt='로고' />
      </div>

      <div className={style.resultCase} style={{ marginTop: margin }}>
        <img src={image} alt='결과 유형' />
      </div>

      <div
        className={style.startBtn}
        onClick={() => {
          navigate('/test/1');
        }}
      >
        <img src={startBtn} alt='시작하기 버튼' />
      </div>

      <p className={style.Staff} onClick={() => navigate('/Staff')}>
        제작진 알아보기
      </p>
    </div>
  );
}

export default Main;
