import style from "../styles/Result_explain.module.scss";

function Game_explain() {
  return (
    <div className={style.Game_explain}>
      <p className={style.develop}>
        <span>게임 개발자</span>가 된다면?
      </p>
      <ul>
        <li className={style.listItem}>
          사용자가 눈으로 보는 영역(UI)을 구축 <br />
          하고, 기능을 구현해요.
        </li>
        <li className={style.listItem}>
          사용자가 서비스에서 겪는 경험(UX)을 <br />
          구현하고 편리하게 개선해요.
        </li>
        <li className={style.listItem}>
          디자이너와 협업하여 서비스의 시각적 <br />인 부분을 담당해요.
        </li>
      </ul>
    </div>
  );
}

export default Game_explain;
