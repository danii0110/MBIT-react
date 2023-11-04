import style from "../styles/Result_illust.module.scss";
import Fe from "../assets/images/result(Fe).svg";

function FE_illust() {
  return (
    <div className={style.FE_illust}>
      <div className="style.FEimg">
        <img src={Fe} alt="프론트엔드 일러스트" />
      </div>
    </div>
  );
}

export default FE_illust;
