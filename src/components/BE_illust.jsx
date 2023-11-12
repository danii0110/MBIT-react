import style from "../styles/Result_illust.module.scss";
import Be from "../assets/images/result(Be).svg";

function BE_illust() {
  return (
    <div className={style.BE_illust}>
      <div className="style.BEimg">
        <img src={Be} alt="백엔드 일러스트" />
      </div>
    </div>
  );
}

export default BE_illust;
