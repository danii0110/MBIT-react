import style from '../styles/Main.module.scss';
import logoImg from '../assets/images/indexLogo.svg';
import Fe from '../assets/images/result(Fe).svg';
import Be from '../assets/images/result(Be).svg';
import Ds from '../assets/images/result(Ds).svg';
import Security from '../assets/images/result(Security).svg';
import Game from '../assets/images/result(Game).svg';
import startBtn from '../assets/images/startBtn.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [Fe, Be, Ds, Security, Game];
// 이미지 랜덤 출력을 위한 배열 선언

function getRandom() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return { image: images[randomIndex], name: randomIndex };
}
// 0~1 사이의 실수 생성, 정수 변환을 통해 images[0 ~ 4] 리턴
// 각 이미지의 Height 가 다름. 각 경우에 따라 layout 조정

function getMargin(name) {
  switch (name) {
    case 0: // Fe
      return '123px';
    case 1: // Be
      return '62px';
    case 2: // Ds
      return '37px';
    case 3: // Security
      return '27px';
    case 4: // Game
      return '49px';
  }
}

function Main() {
  const navigate = useNavigate();
  const { image, name } = getRandom();
  const margin = getMargin(name);

  return (
    <div className={style.Main}>
      <div className={style.logoArea}>
        <img src={logoImg} alt='로고' />
      </div>

      <div className={style.resultCase} style={{ marginTop: margin }}>
        <img src={image} alt='결과 유형' />
      </div>

      <div
        className={style.startBtn}
        onClick={() => {
          navigate('/test/1');
        }}
      >
        <img src={startBtn} alt='시작하기 버튼' />
      </div>

      <p className={style.Staff}>제작진 알아보기</p>
    </div>
  );
}

export default Main;
