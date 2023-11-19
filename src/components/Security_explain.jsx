import style from "../styles/Result_explain.module.scss";

function Security_explain() {
  return (
    <div className={style.Security_explain}>
      <p className={style.develop}>
        <span>보안 엔지니어</span>가 된다면?
      </p>
      <ul>
        <li className={style.listItem}>
          시스템과 네트워크에 대한 취약점을 분<br />
          석하고 이를 보완해요.
        </li>
        <li className={style.listItem}>
          보안 정책, 접근 제어, 암호화, 방화벽
          <br /> 등 보안 인프라를 강화해요.
        </li>
        <li className={style.listItem}>
          보안 사고에 대응하고 조사를 통해 재발
          <br />을 방지해요.
        </li>
      </ul>
    </div>
  );
}

export default Security_explain;
