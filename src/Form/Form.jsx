import { useState } from 'react';
import classes from './Form.module.scss';
import logo from '../assets/images/logo.png';
import Button from '../UI/Button';

const Form = () => {
  const [number, setNumber] = useState(1);

  const buttonClickHander = (event) => {
    number < 12 && setNumber(number + 1);
  };

  return (
    <div className={classes.container}>
      <img className={logo} src={logo} alt='logo-header' />
      <div className={classes.numb}>{number}/12</div>
      <div className={classes.question}>.</div>
      <Button onClick={buttonClickHander}>next</Button>
    </div>
  );
};

export default Form;
