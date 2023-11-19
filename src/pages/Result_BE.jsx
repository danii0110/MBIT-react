import Default from "../styles/Result.module.scss";
import logoImg from "../assets/images/logo.svg";
import BE_top from "../components/BE_top";
import BE_illust from "../components/BE_illust";
import BE_explain from "../components/BE_explain";
import BE_stack from "../components/BE_stack";

import kakao from "../assets/images/kakao.svg";
import insta from "../assets/images/Instagram.svg";
import social_default from "../assets/images/ordinary.svg";
import collectionBtn from "../assets/images/collectionBtn.svg";
import retryBtn from "../assets/images/retryBtn.svg";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

// 각 라이브러리 설치 필요 (axios, chart.js)
// npm install axios
// npm install react-chartjs-2 chart.js

function Result_BE() {
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
        // alert("Get Request에 실패하였습니다.");
      });
  }, []);

  const data = {
    labels: ["BE", "Data", "FE", "Game", "Security"],
    datasets: [
      {
        label: "#누적된 데이터 수 :",
        data: [155, 100, 55, 75, 60],
        backgroundColor: [
          "rgba(255, 230, 82, 0.8)",
          "rgba(255, 131, 112, 0.8)",
          "rgba(168, 218, 86, 0.8)",
          "rgba(190, 89, 255, 0.8)",
          "rgba(85, 136, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 230, 82, 1)",
          "rgba(255, 131, 112, 1)",
          "rgba(168, 218, 86, 1)",
          "rgba(190, 89, 255, 1)",
          "rgba(85, 136, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const total = 155 + 100 + 55 + 75 + 60;
  const percentage = Math.round((155 / total) * 100);

  const navigate = useNavigate();
  return (
    <div className={Default.Result_Game}>
      <div className={Default.logoArea}>
        <img src={logoImg} alt="로고" />
      </div>

      <BE_top />
      <BE_illust />

      <div className={Default.BEsummary}>
        <ul>
          <li>#서버</li>
          <li>#기능 구현</li>
          <li>#커피 필수</li>
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

      <BE_explain />
      <BE_stack />

      <p className={Default.percent}>
        참여자의 {percentage}%가 나와 같은 유형이에요 !
      </p>

      <div className={Default.donutChart}>
        <Doughnut data={data} />
      </div>

      <img
        className={Default.collectionBtn}
        src={collectionBtn}
        alt="다른 유형 보러가기"
        onClick={() => navigate("/Collections")}
      />

      <img
        className={Default.retryBtn}
        src={retryBtn}
        alt="다시 하기"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default Result_BE;
