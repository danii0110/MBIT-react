import style from "../styles/ResultTop.module.scss";

function FE_top() {
  return (
    <div className={style.FE_top}>
      <p className={style.mbti}>활발한 무계획러</p>
      <p className={style.develop}>
        <span>프론트엔드</span> 개발자
      </p>
    </div>
  );
}

export default FE_top;
