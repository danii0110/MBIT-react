import { useState } from 'react';
import classes from './Form.module.scss';
import logo from '../assets/images/logo.png';
import Button from '../component/Button';

const Form = () => {
  const [number, setNumber] = useState(1);

  const buttonClickHander = (event) => {
    number < 12 && setNumber(number + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerImage}>
        <img className={logo} src={logo} alt='logo-header' />
      </div>

      <div className={classes.question}>.</div>
      <div className={classes.numb}>{number}/12</div>
      <div>
        <Button sty onClick={buttonClickHander}>
          {'<'} 이전
        </Button>
        <Button className={classes.button} onClick={buttonClickHander}>
          다음 {'>'}
        </Button>
      </div>
    </div>
  );
};

export default Form;

//   width: 107px;
//   height: 49px;
//   font-size: 25px;
