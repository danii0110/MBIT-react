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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// 각 라이브러리 설치 필요 (axios, chart.js)
// npm install axios
// npm install react-chartjs-2 chart.js

function Result_Game() {
  const [be, setBe] = useState([]);
  const [dataSci, setData] = useState([]);
  const [fe, setFe] = useState([]);
  const [game, setGame] = useState([]);
  const [security, setSecurity] = useState([]);
  // useState : Get 요청 -> reponse 를 각각 저장하기 위함.

  useEffect(() => {
    axios
      .get("http://localhost:8000/pychart/mbits/")
      .then((response) => {
        // 성공
        const responseData = response.data;
        setBe(responseData.backend);
        setData(responseData.data);
        setFe(responseData.frontend);
        setGame(responseData.game);
        setSecurity(responseData.security);
        // Get reponse 저장
        console.log(response);
      })
      .catch((error) => {
        // 실패
        alert("Get Request에 실패하였습니다.");
      });
  }, []);

  return (
    <div className={Default.Result_Game}>
      <div className={Default.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <Game_top />
      <Game_illust />

      <div className={Default.Game_summary}>
        <ul>
          <li>#창의적</li>
          <li>#덕업일치</li>
          <li>#이스터에그</li>
        </ul>
      </div>

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

      <p className={Default.percent}>참여자의 %가 나와 같은 유형이에요 !</p>

      <div className={Default.donutChart}>
        <Doughnut data={data} />
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
