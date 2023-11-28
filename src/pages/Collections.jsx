import logoImg from '../assets/images/logo.png';
import style from './Collections.module.scss';
import Be from '../assets/images/backDeveloper.png';
import Fe from '../assets/images/frontDeveloper.png';
import Ds from '../assets/images/dataScientist.png';
import Security from '../assets/images/securityEngineer.png';
import Game from '../assets/images/gameDeveloper.png';
import backArrow from '../assets/images/backArrow.png';

import { useNavigate } from 'react-router-dom';

function Collections() {
  const navigate = useNavigate();

  return (
    <div className={style.Collections}>
      <div className={style.logoArea}>
        <img src={logoImg} alt='로고' />
      </div>
      <img className={style.backArrow} src={backArrow} alt='back-arrow' onClick={navigate(-1)} />
      <div className={style.Row1}>
        <div className='Be'>
          <p className={style.BeP}>
            <span>백엔드</span> 개발자
          </p>
          <img className={style.BeImg} onClick={() => navigate('/result/back')} src={Be} alt='백엔드' />
        </div>
        <div className='Fe'>
          <p className={style.FeP}>
            <span>프론트엔드</span> 개발자
          </p>
          <img className={style.FeImg} onClick={() => navigate('/result/front')} src={Fe} alt='프론트엔드' />
        </div>
      </div>

      <div className={style.Row2}>
        <div className='Ds'>
          <p className={style.DsP}>
            <span>데이터 사이언티스트</span>
          </p>
          <img className={style.DsImg} onClick={() => navigate('/result/data')} src={Ds} alt='데이터 사이언티스트' />
        </div>
        <div className='Security'>
          <p className={style.SecurityP}>
            <span>보안 엔지니어</span>
          </p>
          <img
            className={style.SecurityImg}
            onClick={() => navigate('/result/security')}
            src={Security}
            alt='보안 엔지니어'
          />
        </div>
      </div>

      <div className='Row3'>
        <div className='Game'>
          <p className={style.GameP}>
            <span>게임 개발자</span>
          </p>
          <img className={style.GameImg} src={Game} onClick={() => navigate('/result/game')} alt='게임 개발자' />
        </div>
      </div>
    </div>
  );
}

export default Collections;
