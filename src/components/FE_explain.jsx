import style from "../styles/ResultTop.module.scss";

function FE_explain() {
  return (
    <div className={style.FE_explain}>
      <p className={style.develop}>
        <span>프론트엔드</span> 개발자가 된다면?
      </p>
      <p className={style.details}>
        <ul>
          <li>프론트엔드와 협업을 해 다양한 프로젝트를 만들 수 있어요-!</li>
          <li>웹에 이용되는 다양한 기능들을 제작할 수 있어요</li>
          <li>앱에서 사용되는 여러가지 기능들을 제작할 수 있어요.</li>
        </ul>
      </p>
    </div>
  );
}

export default FE_explain;
