import style from "../styles/Staff.module.scss";
import logoImg from "../assets/images/indexLogo.svg";
import goBack from "../assets/images/backspace.svg";
import { useNavigate } from "react-router-dom";

function Staff() {
  const navigate = useNavigate();
  return (
    <div className={style.Staff}>
      <div className={style.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <img
        className={style.Back}
        onClick={() => navigate("/")}
        src={goBack}
        alt="뒤로가기"
      />

      <div className={style.Be}>
        <p>BACKEND</p>
        <ul>
          <li>서경대학교 소프트웨어학과19 김영재</li>
          <li>서경대학교 컴퓨터공학과20 황현진</li>
          <li>서경대학교 컴퓨터공학과20 하경림</li>
        </ul>
      </div>

      <div className={style.Fe}>
        <p>FRONTEND</p>
        <ul>
          <li>서경대학교 컴퓨터공학과19 김온유</li>
          <li>서경대학교 소프트웨어학과21 천다인</li>
        </ul>
      </div>

      <div className={style.Design}>
        <p>PM / DESIGN</p>
        <ul>
          <li>서경대학교 컴퓨터공학과21 윤주은</li>
        </ul>
      </div>
    </div>
  );
}

export default Staff;
