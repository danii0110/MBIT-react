import style from "../styles/Result_stack.module.scss";
import python from "../assets/images/python.svg";
import R from "../assets/images/R.svg";
import SQL from "../assets/images/mysql.svg";
import numpy from "../assets/images/numpy.svg";

function DS_stack() {
  return (
    <div className={style.DS_stack}>
      <p className={style.title}>추천 기술 스택</p>
      <div className={style.stacks}>
        <img src={python} alt="python" />
        <img src={R} alt="R" />
        <img src={SQL} alt="mySQL" />
        <img src={numpy} alt="numpy" />
      </div>
    </div>
  );
}

export default DS_stack;
