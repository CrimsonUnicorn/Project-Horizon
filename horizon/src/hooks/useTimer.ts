import { useEffect, useState } from "react";

function useTimer(delay: number = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  return count;
}

export default useTimer;