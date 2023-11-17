import style from "../styles/Result_stack.module.scss";
import linux from "../assets/images/linux.svg";
import python from "../assets/images/python.svg";
import aws from "../assets/images/aws.svg";

function Security_stack() {
  return (
    <div className={style.Security_stack}>
      <p className={style.title}>추천 기술 스택</p>
      <div className={style.stacks}>
        <img src={linux} alt="linux" />
        <img src={python} alt="python" />
        <img src={aws} alt="aws" />
      </div>
    </div>
  );
}

export default Security_stack;
