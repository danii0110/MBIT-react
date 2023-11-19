import style from "../styles/Result_stack.module.scss";
import python from "../assets/images/python.svg";
import java from "../assets/images/java.svg";
import django from "../assets/images/django.svg";
import spring from "../assets/images/spring.svg";

function BE_stack() {
  return (
    <div className={style.BE_stack}>
      <p className={style.title}>추천 기술 스택</p>
      <div className={style.stacks}>
        <img src={python} alt="python" />
        <img src={java} alt="java" />
        <img src={django} alt="django" />
        <img src={spring} alt="spring" />
      </div>
    </div>
  );
}

export default BE_stack;
