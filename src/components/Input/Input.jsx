const Input = ({ onChange, onClick }) => {
  const handleChange = (event) => {
    event.preventDefault();
    console.log("react working");
    onChange(event);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Click me");
    onClick(e);
  };
  return (
    <div>
      <input onChange={handleChange} onClick={handleClick} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export { Input };
