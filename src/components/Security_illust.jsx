import style from '../styles/Result_illust.module.scss';
import Security from '../assets/images/securityEngineer.png';

function Security_illust() {
  return (
    <div className={style.Security_illust}>
      <div className='style.SecurityImg'>
        <img src={Security} alt='보안 엔지니어' />
      </div>
    </div>
  );
}

export default Security_illust;
