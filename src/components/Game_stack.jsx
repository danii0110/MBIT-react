import style from "../styles/Result_stack.module.scss";
import cPlus from "../assets/images/c++.svg";
import csharp from "../assets/images/cSharp.svg";
import unity from "../assets/images/unity.svg";

function Game_stack() {
  return (
    <div className={style.Game_stack}>
      <p className={style.title}>추천 기술 스택</p>
      <div className={style.stacks}>
        <img src={cPlus} alt="c++" />
        <img src={csharp} alt="c#" className={style.csharpImage} />
        <img src={unity} alt="unity" className={style.unityImage} />
      </div>
    </div>
  );
}

export default Game_stack;
