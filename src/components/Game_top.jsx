import style from "../styles/ResultTop.module.scss";

function Game_top() {
  return (
    <div className={style.Game_top}>
      <p className={style.mbti}>즐거움을 만드는</p>
      <p className={style.develop}>
        <span>게임 개발자</span>
      </p>
    </div>
  );
}

export default Game_top;
