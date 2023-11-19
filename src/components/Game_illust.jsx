import style from '../styles/Result_illust.module.scss';
import Game from '../assets/images/result(Game).svg';

function Game_illust() {
  return (
    <div className={style.Game_illust}>
      <div className='style.GameImg'>
        <img src={Game} alt='게임 개발자' />
      </div>
    </div>
  );
}

export default Game_illust;
