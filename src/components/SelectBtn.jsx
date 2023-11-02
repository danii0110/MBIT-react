import classes from './SelectBtn.module.scss';

function SelectBtn(props) {
  return (
    <button type='button' onClick={props.handleOnClick} className={classes.button}>
      {props.children}
    </button>
  );
}

export default SelectBtn;
