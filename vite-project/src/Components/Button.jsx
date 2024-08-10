const Button = (props) => {

  return <div>
    <button disabled={props.dis} onClick={props.onClick}>{props.children}</button>
  </div>;
};

export default Button;
