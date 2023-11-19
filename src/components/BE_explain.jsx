import style from "../styles/Result_explain.module.scss";

function BE_explain() {
  return (
    <div className={style.BE_explain}>
      <p className={style.develop}>
        <span>백엔드</span>개발자가 된다면?
      </p>
      <ul>
        <li className={style.listItem}>
          소프트웨어의 서버 측 구성과 로직을
          <br /> 담당해요.
        </li>
        <li className={style.listItem}>
          만든 프로그램 배포하고 서비스를 안전
          <br />
          하게 유지하고 관리해요.
        </li>
        <li className={style.listItem}>
          데이터베이스를 활용하여 데이터를 처<br />
          리하고 전달해요.
        </li>
      </ul>
    </div>
  );
}

export default BE_explain;
