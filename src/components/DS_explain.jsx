import style from "../styles/Result_explain.module.scss";

function DS_explain() {
  return (
    <div className={style.DS_explain}>
      <p className={style.develop}>
        <span>데이터 사이언티스트</span>가 된다면?
      </p>
      <ul>
        <li className={style.listItem}>
          데이터를 분석하고 해석하여 조직의 의<br />사 결정에 도움을 주는 역할을
          해요.
        </li>
        <li className={style.listItem}>
          수학, 통계학, 컴퓨터 과학 등의 지식을
          <br /> 활용하여 데이터에서 정보를 추출하고
          <br /> 가공해요.
        </li>
        <li className={style.listItem}>
          그래프, 차트, 대시보드 등을 사용하여
          <br /> 분석 결과를 시각화해요.
        </li>
      </ul>
    </div>
  );
}

export default DS_explain;
