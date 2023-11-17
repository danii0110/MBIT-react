import style from "../styles/ResultTop.module.scss";

function BE_top() {
  return (
    <div className={style.BE_top}>
      <p className={style.mbti}>이성적인 두뇌</p>
      <p className={style.develop}>
        <span>백엔드</span> 개발자
      </p>
    </div>
  );
}

export default BE_top;
