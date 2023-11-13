import Default from "../styles/Result.module.scss";
import logoImg from "../assets/images/logo.svg";
import FE_top from "../components/FE_top";
import FE_illust from "../components/FE_illust";
import FE_explain from "../components/FE_explain";
import FE_stack from "../components/FE_stack";

import kakao from "../assets/images/kakao.svg";
import insta from "../assets/images/Instagram.svg";
import social_default from "../assets/images/ordinary.svg";
import collectionBtn from "../assets/images/collectionBtn.svg";
import retryBtn from "../assets/images/retryBtn.svg";

import axios from "axios";

function Result_FE() {
  return (
    <div className={Default.Result_FE}>
      <div className={Default.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <FE_top />
      <FE_illust />

      <div className={Default.social}>
        <p>공유하기</p>
        <div className={Default.icons}>
          <img src={kakao} alt="카카오톡 공유" />
          <img src={insta} alt="인스타그램 공유" />
          <img src={social_default} alt="URL 공유" />
        </div>
      </div>

      <FE_explain />
      <FE_stack />

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

export default Result_FE;
