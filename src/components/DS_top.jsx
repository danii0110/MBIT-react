import style from "../styles/ResultTop.module.scss";

function DS_top() {
  return (
    <div className={style.DS_top}>
      <p className={style.mbti}>논리적인 결정 담당</p>
      <p className={style.develop}>
        <span>데이터 사이언티스트</span>
      </p>
    </div>
  );
}

export default DS_top;
