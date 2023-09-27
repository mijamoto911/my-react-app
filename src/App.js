import { Input } from "./components/Input/Input";

const App = () => {
  const handleChange = (event) => {};
  const handleClick = (e) => {};
  return (
    <div>
      <h2>First project React</h2>
      <Input onChange={handleChange} onClick={handleClick}></Input>
    </div>
  );
};

export { App };
