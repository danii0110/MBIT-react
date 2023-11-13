import Default from "../styles/Result.module.scss";
import logoImg from "../assets/images/logo.svg";
import Game_top from "../components/Game_top";
import Game_illust from "../components/Game_illust";
import Game_explain from "../components/Game_explain";
import Game_stack from "../components/Game_stack";

import kakao from "../assets/images/kakao.svg";
import insta from "../assets/images/Instagram.svg";
import social_default from "../assets/images/ordinary.svg";
import collectionBtn from "../assets/images/collectionBtn.svg";
import retryBtn from "../assets/images/retryBtn.svg";

function Result_Game() {
  return (
    <div className={Default.Result_Game}>
      <div className={Default.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <Game_top />
      <Game_illust />

      <div className={Default.social}>
        <p>공유하기</p>
        <div className={Default.icons}>
          <img src={kakao} alt="카카오톡 공유" />
          <img src={insta} alt="인스타그램 공유" />
          <img src={social_default} alt="URL 공유" />
        </div>
      </div>

      <Game_explain />
      <Game_stack />

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

export default Result_Game;
