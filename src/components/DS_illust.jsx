import style from "../styles/Result_illust.module.scss";
import Ds from "../assets/images/result(Ds).svg";

function DS_illust() {
  return (
    <div className={style.DS_illust}>
      <div className="style.DSimg">
        <img src={Ds} alt="데이터 사이언티스트 일러스트" />
      </div>
    </div>
  );
}

export default DS_illust;
