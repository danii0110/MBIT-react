import Default from "../styles/Result.module.scss";
import logoImg from "../assets/images/logo.svg";
import Security_top from "../components/Security_top";
import Security_illust from "../components/Security_illust";
import Security_explain from "../components/Security_explain";
import Security_stack from "../components/Security_stack";

import kakao from "../assets/images/kakao.svg";
import insta from "../assets/images/Instagram.svg";
import social_default from "../assets/images/ordinary.svg";
import collectionBtn from "../assets/images/collectionBtn.svg";
import retryBtn from "../assets/images/retryBtn.svg";

function Result_Security() {
  return (
    <div className={Default.Result_Security}>
      <div className={Default.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <Security_top />
      <Security_illust />

      <div className={Default.social}>
        <p>공유하기</p>
        <div className={Default.icons}>
          <img src={kakao} alt="카카오톡 공유" />
          <img src={insta} alt="인스타그램 공유" />
          <img src={social_default} alt="URL 공유" />
        </div>
      </div>

      <Security_explain />
      <Security_stack />

      <div className={Default.donutChart}>
        <p>참여자의 %가 나와 같은 유형이에요 !</p>
      </div>

      <img
        className={Default.collectionBtn}
        src={collectionBtn}
        alt="다른 유형 보러가기"
      />
      <img className={Default.retryBtn} src={retryBtn} alt="다시 하기" />
    </div>
  );
}

export default Result_Security;
