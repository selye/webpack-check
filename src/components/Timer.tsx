import { useCallback, useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState<number>(0);

  const timer = useRef<NodeJS.Timeout>(null);

  const handleStart = useCallback(() => {
    timer.current = setInterval(() => {
      setTime((c) => c + 1);
    }, 100);
  }, []);

  const handlePause = useCallback(() => {
    clearInterval(timer.current);
    timer.current = null;
  }, []);

  return (
    <div>
      <p>{time / 10}second</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>pause</button>
    </div>
  );
};
