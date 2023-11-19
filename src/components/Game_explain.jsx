import style from "../styles/Result_explain.module.scss";

function Game_explain() {
  return (
    <div className={style.Game_explain}>
      <p className={style.develop}>
        <span>게임 개발자</span>가 된다면?
      </p>
      <ul>
        <li className={style.listItem}>
          2D 또는 3D 그래픽, 캐릭터 디자인, 애<br />
          니메이션 효과 등 게임의 그래픽 요소를
          <br /> 개발해요.
        </li>
        <li className={style.listItem}>
          게임 플레이를 테스트하여 버그를 찾고
          <br /> 수정하는 작업을 수행해요.
        </li>
        <li className={style.listItem}>
          게임 디자이너, 아티스트, 프로듀서 등<br />
          다양한 분야의 전문가와 협력하여 프로
          <br />
          젝트를 관리해요.
        </li>
      </ul>
    </div>
  );
}

export default Game_explain;
