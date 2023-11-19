import logoImg from '../assets/images/indexLogo.svg';
import style from '../styles/Collections.module.scss';
import Be from '../assets/images/result(Be).svg';
import Fe from '../assets/images/result(Fe).svg';
import Ds from '../assets/images/result(Ds).svg';
import Security from '../assets/images/result(Security).svg';
import Game from '../assets/images/result(Game).svg';

function Collections() {
  return (
    <div className={style.Collections}>
      <div className={style.logoArea}>
        <img src={logoImg} alt='로고' />
      </div>

      <div className={style.Row1}>
        <div className='Be'>
          <p className={style.BeP}>
            <span>백엔드</span> 개발자
          </p>
          <img className={style.BeImg} src={Be} alt='백엔드' />
        </div>
        <div className='Fe'>
          <p className={style.FeP}>
            <span>프론트엔드</span> 개발자
          </p>
          <img className={style.FeImg} src={Fe} alt='백엔드' />
        </div>
      </div>

      <div className={style.Row2}>
        <div className='Ds'>
          <p className={style.DsP}>
            <span>데이터 사이언티스트</span>
          </p>
          <img className={style.DsImg} src={Ds} alt='데이터 사이언티스트' />
        </div>
        <div className='Security'>
          <p className={style.SecurityP}>
            <span>보안 엔지니어</span>
          </p>
          <img className={style.SecurityImg} src={Security} alt='보안 엔지니어' />
        </div>
      </div>

      <div className='Row3'>
        <div className='Game'>
          <p className={style.GameP}>
            <span>게임 개발자</span>
          </p>
          <img className={style.GameImg} src={Game} alt='게임 개발자' />
        </div>
      </div>
    </div>
  );
}

export default Collections;
