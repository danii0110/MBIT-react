import style from "../styles/Result_stack.module.scss";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import js from "../assets/images/js.svg";
import react from "../assets/images/react.svg";

function FE_stack() {
  return (
    <div className={style.FE_stack}>
      <p className={style.title}>추천 기술 스택</p>
      <div className={style.stacks}>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
      </div>
    </div>
  );
}

export default FE_stack;
