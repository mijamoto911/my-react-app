const Input = ({ onChange }) => {
  const handleChange = (event) => {
    event.preventDefault();
    console.log("react working");
    onChange(event);
  };

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};
export { Input };
