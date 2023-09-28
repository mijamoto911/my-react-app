import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

const App = () => {
  const handleChange = (event) => {};
  const handleClick = (e) => {};
  return (
    <div>
      <h2>First project React</h2>
      <Input onChange={handleChange}></Input>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export { App };
