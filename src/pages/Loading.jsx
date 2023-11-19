import style from "../styles/Loading.module.scss";
import logo from "../assets/images/logo.svg";

const pStyle = {
  fontFamily: "Jua",
  // 구글폰트 CDN 필요
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "0em",
  marginTop: "66.81px",
  marginBottom: "10px",
};

function Loading() {
  return (
    <div className={style.Loading}>
      <div className={style.logoArea}>
        <img src={logo} alt="로고이미지" />
      </div>

      <p style={pStyle}>유형 분석중!</p>
      <div className={style.loadingAnimation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loading;
