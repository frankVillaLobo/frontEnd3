const Button = (props) => {
    console.log(props)
  return <div>
    <button>{props.children}</button>
  </div>;
};

export default Button;
