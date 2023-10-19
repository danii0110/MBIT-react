import classes from './SelectBtn.module.scss';

const SelectBtn = (props) => {
  return <div className={classes.button}>{props.children}</div>;
};

export default SelectBtn;
