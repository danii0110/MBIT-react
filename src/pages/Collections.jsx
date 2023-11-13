import logoImg from "../assets/images/logo.svg";
import style from "../styles/Collections.module.scss";
import Be from "../assets/images/result(Be).svg";
import Fe from "../assets/images/result(Fe).svg";
import Ds from "../assets/images/result(Ds).svg";
import Security from "../assets/images/result(Security).svg";
import Game from "../assets/images/result(Game).svg";

function Collections() {
  return (
    <div className={style.Collections}>
      <div className={style.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <p className={style.Backend}>
        <span>백엔드 개발자</span> 개발자
      </p>

      <img className={style.BeImg} src={Be} alt="백엔드 일러스트" />

      <p className={style.Frontend}>
        <span>프론트엔드</span> 개발자
      </p>

      <img className={style.FeImg} src={Fe} alt="프론트엔드 일러스트" />

      <p className={style.Datascientist}>
        <span>데이터 사이언티스트</span>
      </p>

      <img
        className={style.DatascientistImg}
        src={Ds}
        alt="데이터 사이언티스트 일러스트"
      />

      <p className={style.Security}>
        <span>보안 엔지니어</span>
      </p>

      <img
        className={style.SecutifyImg}
        src={Security}
        alt="보안 엔지니어 일러스트"
      />

      <p className={style.Game}>
        <span>게임 개발자</span>
      </p>

      <img className={style.GameImg} src={Game} alt="게임 개발자" />
    </div>
  );
}

export default Collections;
