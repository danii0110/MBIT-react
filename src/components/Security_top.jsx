import style from "../styles/ResultTop.module.scss";

function Security_top() {
  return (
    <div className={style.Security_top}>
      <p className={style.mbti}>프로그램의 경찰</p>
      <p className={style.develop}>
        <span>보안 엔지니어</span>
      </p>
    </div>
  );
}

export default Security_top;
