import { useState } from "react";
export default function Counter({initCount = 0}) {
  const [count, setCount] = useState(initCount);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleCount}>Click Me + 1</button>
      <button onClick={handleReset}>Reset Count</button>
      <p>The Count Is : {count}</p>
    </div>
  );
}
