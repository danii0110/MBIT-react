import style from "../styles/ResultTop.module.scss";

function Game_top() {
  return (
    <div className={style.Game_top}>
      <p className={style.mbti}>활발한 무계획러</p>
      <p className={style.develop}>
        <span>게임 개발자</span>
      </p>
    </div>
  );
}

export default Game_top;
