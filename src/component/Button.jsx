import classes from './Button.module.scss';
const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

//className : 가로, 세로, font-size
//type : 문항 1-11은 button, 문항 12는 submit(마지막 문항 버튼은 제출하기인가?)
//onClick :
