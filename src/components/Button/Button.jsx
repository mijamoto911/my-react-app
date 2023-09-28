const Button = ({ onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Click me");
    onClick(e);
  };
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};
export { Button };
